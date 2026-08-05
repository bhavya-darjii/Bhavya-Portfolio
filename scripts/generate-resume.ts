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
    const outputPath = path.join(__dirname, "..", "public", "resume.pdf");
    fs.writeFileSync(outputPath, Buffer.from(buffer));

    console.log(`Successfully generated PDF at ${outputPath}`);
  } catch (error) {
    console.error("Error generating resume:", error);
    process.exit(1);
  }
}

generateResume();
