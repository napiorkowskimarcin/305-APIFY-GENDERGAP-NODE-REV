const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Worksheet Name");

const data = require("./apify_storage/datasets/default/000000001.json");

const headingColumnNames = ["name", "address", "sector", "link"];

//Write Column Title in Excel file
let headingColumnIndex = 1;
headingColumnNames.forEach((heading) => {
  ws.cell(1, headingColumnIndex++).string(heading);
});

//Write Data in Excel file
let rowIndex = 2;
data.forEach((record) => {
  let columnIndex = 1;
  Object.keys(record).forEach((columnName) => {
    ws.cell(rowIndex, columnIndex++).string(record[columnName]);
  });
  rowIndex++;
});
wb.write("GenderGapData1.xlsx");
