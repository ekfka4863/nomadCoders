// test.js

function outputData() {
  const id = ' ';
  const sheetName = ' ';

  const sheetData = SpreadsheetApp.openById(id).getSheetByName(sheetName).getDataRange().getValues();
  const rows = sheetData.slice(1);
  const data = rows.map( (row)=>{
    const myObj = {
      id:row[0], 
      product:row[1],
      type:row[2],
      views:row[3],
      price:row[4],
      recommend:row[5],
      season:row[6],
    };    
    return myObj;
  });
  return data;
}
// ---------------------------------------
function doGet(e){
  const output = JSON.stringify({
    status:'success',
    data:outputData()
  });
  return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
}