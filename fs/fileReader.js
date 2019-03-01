const fs = require('fs'),
    PDFParser = require('pdf2json');
const path = require('path');

const pdfParser = new PDFParser(this, 1);
//convert to a pdf file to txt
const convertPDFToTxt = (pdf)=>{
    pdfParser.on('pdfParser_dataError', errData => console.error(errData.parserError));
    pdfParser.on('pdfParser_dataReady', pdfData => {
        fs.writeFile(`../lib/${pdf}.txt`, pdfParser.getRawTextContent(), (err)=>{
            if(err){
                console.log(err);
            }
        });
    });
    pdfParser.loadPDF(`../lib/${pdf}.pdf`);
};

const readTxt = (article)=>{
    convertPDFToTxt(article);
    setTimeout(()=>{
        fs.readFile('../lib/article.txt', 'UTF-8', (err,content)=>{
            if(err){
                console.log(err);
            }
            console.log(content);
        });
    }
    ,3000);
};
fs.readdir('../lib', (err, files) => {
    if (err) {
       console.log(`Some files can't be converted to PDF ${err}`);
    }
    files.forEach((file)=>{
        if(path.extname(file)=== '.pdf'){
            convertPDFToTxt(path.basename(file,'.pdf'));
        }
        
    });
});

