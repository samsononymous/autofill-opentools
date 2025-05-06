const doGet = (event = {}) => {

const { parameter } = event;

const { id, name, revision, visibility, reviewer,permissions, documentId } = parameter;

const document = DocumentApp.openById(documentId);

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



return HtmlService.createHtmlOutput("Document has been filled with basic information!");

}

