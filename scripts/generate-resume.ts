import * as fs from "fs";
import * as path from "path";

async function generateResume() {
  try {
    const templatePath = path.join(__dirname, "..", "latex_code");
    const latexContent = fs.readFileSync(templatePath, "utf-8");

    console.log("Read latex_code (length: " + latexContent.length + " bytes)");
    console.log("Sending to LaTeX API...");
    
    // @ts-ignore
    let fetchObj: any;
    // @ts-ignore
    let FormDataObj: any;
    
    if (typeof fetch === 'undefined') {
        // @ts-ignore
        const nodeFetch = await import('node-fetch');
        fetchObj = nodeFetch.default;
        FormDataObj = nodeFetch.FormData || global.FormData;
    } else {
        fetchObj = fetch;
        FormDataObj = FormData;
    }

    const formData = new FormDataObj();
    formData.append("filecontents[]", latexContent);
    formData.append("filename[]", "document.tex");
    formData.append("engine", "pdflatex");
    formData.append("return", "pdf");

    const response = await fetchObj("https://texlive.net/cgi-bin/latexcgi", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to generate PDF. Status:", response.status);
      console.error(errorText);
      process.exit(1);
    }

    const buffer = await response.arrayBuffer();
    const outputPaths = [
      path.join(__dirname, "..", "public", "resume.pdf"),
      path.join(__dirname, "..", "public", "Bhavya Darji — Resume.pdf"),
    ];
    try {
      let finalBuffer = Buffer.from(buffer);
      try {
        const { PDFDocument } = await import("pdf-lib");
        const pdfDoc = await PDFDocument.load(finalBuffer);
        pdfDoc.setTitle("Bhavya Darji — Resume");
        pdfDoc.setAuthor("Bhavya Darji");
        pdfDoc.setSubject("Bhavya Darji Resume");
        pdfDoc.setCreator("Bhavya Darji");
        pdfDoc.setProducer("Bhavya Darji");
        finalBuffer = Buffer.from(await pdfDoc.save());
      } catch (metaErr) {
        console.warn("Could not attach metadata to resume:", metaErr);
      }
      for (const p of outputPaths) {
        fs.writeFileSync(p, finalBuffer);
        console.log(`Successfully generated PDF at ${p}`);
      }
    } catch (err: any) {
      if (err.code === "EBUSY") {
        console.error("\n⚠️  Could not overwrite resume PDF files because a file is currently locked by Adobe Acrobat or another PDF viewer.");
        console.error("👉 Please close the PDF in Adobe Acrobat and re-run 'npm run resume'.\n");
        process.exit(1);
      }
      throw err;
    }
  } catch (error) {
    console.error("Error generating resume:", error);
    process.exit(1);
  }
}

generateResume();
