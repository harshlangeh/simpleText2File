
// Function to download text as a .txt file
function downloadTxt() {
    const text = document.getElementById("text-input").value;
    // A Blob (Binary Large Object) is a file-like object that represents raw data.
    const blob = new Blob([text], { type: "text/plain" });
    // Create a Download Link
    const link = document.createElement("a");
    // Create a Downloadable File URL, creates a URL that points to the blob object
    link.href = URL.createObjectURL(blob);
    // Set the Download Filename
    link.download = "text-file.txt";
    // Trigger the Download
    link.click();
}


// Function to download text as a .doc file
function downloadWord() {
    // get text
    const text = document.getElementById("text-input").value;
    // The header includes various XML namespaces and meta tags that are required to format the document as a .doc file.
    // The footer closes the HTML tags opened in the header.
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                   "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                   "xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'></head><body>";
    const footer = "</body></html>";
    // sourceHTML combines the header, the user-entered text, and the footer to create the full HTML structure of the Word document.
    const sourceHTML = header + text + footer;

    // \ufeff is the Unicode Byte Order Mark (BOM). It ensures that the text is correctly interpreted as UTF-8.
    // sourceHTML is the HTML content that forms the body of the Word document.
    // This line creates a Blob object that represents the Word document.
    const blob = new Blob(['\ufeff', sourceHTML], {
        type: 'application/msword'
        // Specifies that the Blob is of the MIME type application/msword, which is recognized by browsers and software as a Microsoft Word document.
    });

    const link = document.createElement('a');
    // generates a temporary URL that points to the Blob object.
    link.href = URL.createObjectURL(blob);
    // default name of the file when it is downloaded
    link.download = 'text-file.doc';
    // Programmatically triggers a click event on the link, which starts the download process
    link.click();
}



// Function to download text as a PDF file
function downloadPdf() {
    // This line is a destructuring assignment that extracts the jsPDF constructor from the window.jspdf object.
    // The jsPDF constructor is the main class provided by the jsPDF library, which is used to create PDF documents programmatically in JavaScript.
    // This line assumes that the jsPDF library has already been loaded in the webpage (typically via a script tag).
    const { jsPDF } = window.jspdf;
    // This line creates a new instance of a jsPDF document.
    // new jsPDF() initializes an empty PDF document.
    const doc = new jsPDF();
    // This line retrieves the text that the user has entered into the textarea with the ID text-input.
    // The text is stored in the variable text.
    const text = document.getElementById("text-input").value;
    // This line adds the text from the text-input textarea to the PDF document.
    // text is the content to be added to the PDF.
    // 10, 10 specifies the position (in millimeters) on the page where the text will start. In this case, it's 10mm from the left edge and 10mm from the top edge of the page.
    // The text will be rendered on the PDF page at the specified coordinates
    doc.text(text, 10, 10);
    //  triggers the download of the PDF file with file name text-file.pdf
    doc.save("text-file.pdf");
}




