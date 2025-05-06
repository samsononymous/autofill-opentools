function doGet(event = {}) {

const { parameter } = event;

const { id, name, revision, visibility, reviewer, permissions } = parameter;



// Call the copyAndSaveTemplate function to create a copy of the template

const copiedDocumentId = copyAndSaveTemplate();



// Use the copied document ID as a reference for the document

const document = DocumentApp.openById(copiedDocumentId);

const permissionArray = permissions.split(',').map(permission => permission.trim());

const body = document.getBody();

const tables = body.getTables();



if (tables.length > 0) {

var basicinfoTable = tables[0]; // Basic Info Table



// Update basic info table cells

basicinfoTable.getCell(0, 1).setText(name);

basicinfoTable.getCell(0, 3).setText(id);

basicinfoTable.getCell(1, 1).setText(visibility);

basicinfoTable.getCell(1, 3).setText(revision);

basicinfoTable.getCell(2, 1).setText(reviewer);



var bTable = tables[0];

var cell = bTable.getCell(2, 3);



// Remove the cell from its parent row

cell.removeFromParent();



// Get the specific row

var row = bTable.getRow(2);



// Insert a new cell in the specified column

var newCell = row.insertTableCell(3);



// Set content for the new cell if needed

newCell.setText(Utilities.formatDate(new Date(), "UTC", "MMM dd, yyyy"));



var permissionTable = tables[5];



// Get all rows in the table except the first one and remove them

var rowCount = permissionTable.getNumRows();



for (var i = rowCount - 1; i > 0; i--) {

permissionTable.getRow(i).removeFromParent();

}



var funcTable = tables[2]; // 3rd Table

funcTable.getCell(0, 1).setText("The primary functionality of this extension is");

funcTable.getCell(1, 1).setText("NA");



var observation = tables[6]; // 7th Table

observation.getCell(0, 1).setText("\n\nStatic Analysis:\n\nNo suspicious scorelogs.\n\nDynamic Analysis:\nExtension successfully installed.\n\nNo malicious network activity.\n");

observation.getCell(1, 1).setText("Yes");

}



const permissionArrayLength = permissionArray.length;



for (var rowIndex = 0; rowIndex < permissionArrayLength; rowIndex++) {

var newRow = permissionTable.appendTableRow();



// Add cells to the new row

var cellContents = [permissionArray[rowIndex], "", "Yes", "No"];



// Loop through the cell contents and add them as cells to the new row

for (var i = 0; i < cellContents.length; i++) {

newRow.appendTableCell(cellContents[i]);

}

}



//AutoSearch

const spreadsheetId = '1B3h4yuqV-x5h7a9B-gU9QY5A9vTWNSfCx9ek5LTGgLo';

const sheetName = 'Sheet1';

const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);



sheet.getRange(1, 1).setValue(id);



// Get the URL of the newly created document

const documentUrl = document.getUrl();



// Create JavaScript code to open the document in a new tab

const javascriptCode = `

var newWindow = window.open('${documentUrl}', '_blank');

newWindow.focus();

`;



// Create an HTML output with the JavaScript code

const outputHtml = `<script>${javascriptCode}</script>Document has been created and opened in a new tab.`;



return HtmlService.createHtmlOutput(outputHtml);

}



function copyAndSaveTemplate() {

function generateRandomName() {

var length = 30;

var result = '';

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

var charactersLength = characters.length;



for (var i = 0; i < length; i++) {

result += characters.charAt(Math.floor(Math.random() * charactersLength));

}



return '[Need-To-Know] ' + result;

}



// Generate a random document name

var randomDocumentName = generateRandomName();



// TEMPLATE_FILE_ID

var templateFileId = '1WJ3rBqO-RMOMoOTA-7t4digda6mrEgC9FD3VG0YW4go';



// Get the template file by ID

var templateFile = DriveApp.getFileById(templateFileId);



// Get the parent folder of the template file

var parentFolder = templateFile.getParents().next();



// Create a copy of the template file as Google Docs

var copiedFile = templateFile.makeCopy(randomDocumentName, parentFolder);



// Get the ID of the copied document

var copiedDocumentId = copiedFile.getId();



return copiedDocumentId;

}
