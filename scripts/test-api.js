import * as fs from "fs";

async function testTexLive() {
  const code = `\\documentclass{article}\\begin{document}Hello TexLive\\end{document}`;
  
  const formData = new FormData();
  formData.append("filecontents[]", code);
  formData.append("filename[]", "document.tex");
  formData.append("engine", "pdflatex");
  formData.append("return", "pdf");

  try {
    const res = await fetch('https://texlive.net/cgi-bin/latexcgi', {
      method: 'POST',
      body: formData
    });
    if (res.ok) {
      console.log("Success POST, got PDF bytes: ", (await res.arrayBuffer()).byteLength);
    } else {
      console.log("Error POST:", res.status, await res.text());
    }
  } catch (e) {
    console.error(e);
  }
}

testTexLive();
