import { Helpers } from "../utils";

const fieldNames = [
  "customerNumber",
  "dinosaur_glass",
  "twoshoes_without_one",
  "data",
  '"select"',
  "id",
  "name",
  "FLEISCH",
  "fire",
  "panther",
  "tucaseid",
  "tulineno",
  "eeincome1",
  "erbmi",
  "erhhch",
  "erincome",
  "erspemch",
  "ertpreat",
  "ertseat",
  "ethgt",
  "etwgt",
  "eudietsoda",
  "eudrink",
  "eueat",
  "euexercise",
  "euexfreq",
  "eufastfd",
  "eufastfdfrq",
  "euffyday",
  "eufdsit",
  "eufinlwgt",
  "eusnap",
  "eugenhth",
  "eugroshp",
  "euhgt",
  "euinclvl",
  "euincome2",
  "eumeat",
  "eumilk",
  "euprpmel",
  "eusoda",
  "eustores",
  "eustreason",
  "eutherm",
  "euwgt",
  "euwic",
  "exincome",
  "CensusTract",
  "County",
  "Borough",
  "TotalPop",
  "Men",
  "Women",
  "Hispanic",
  "White",
  "Black",
  "Native",
  "Asian",
  "Citizen",
  "Income",
  "IncomeErr",
  "IncomePerCap",
  "IncomePerCapErr",
  "Poverty",
  "ChildPoverty",
  "Professional",
  "Service",
  "Office",
  "Construction",
  "Production",
  "Drive",
  "Carpool",
  "Transit",
  "Walk",
  "OtherTransp",
  "WorkAtHome",
  "MeanCommute",
  "Employed",
  "PrivateWork",
  "PublicWork",
  "SelfEmployed",
  "FamilyWork",
  "Unemployment",
];

export default class SQL {
  static getRandomOperator() {
    const positionValues = ["AND", "OR"];

    return `${Helpers.addNewLine()} ${Helpers.getRandomEntry(positionValues)} `;
  }

  static getRandomFieldName() {
    if (Helpers.getRandomInt(1, 10) <= 3) {
      return (
        Helpers.getRandomEntry(fieldNames) +
        " AS " +
        Helpers.getRandomEntry(fieldNames)
      );
    } else {
      return Helpers.getRandomEntry(fieldNames);
    }
  }

  static getRandomSchemaName() {
    const schemaName = [
      "schema" + Helpers.getRandomInt(1, 999),
      "sql",
      "dbo",
      "postgres",
      "urmum",
      "dinosaur",
      "panther",
      "n00b",
      "pretzel",
      "schnitzel",
    ];
    return Helpers.getRandomEntry(schemaName);
  }

  static getRandomTableName() {
    const tableName = [
      "stock",
      "breakfast",
      "day",
      "prison",
      "account",
      "consequence",
      "bridge",
      "st",
      "age",
      "strike",
      "constitution",
      "wind",
      "conversation",
      "page",
      "murder",
      "new",
      "error",
      "bedroom",
      "island",
      "phone",
      "environment",
      "content",
      "passage",
      "machine",
      "screen",
      "may",
      "tradition",
      "target",
      "crown",
      "tour",
      "fun",
      "palace",
      "election",
      "flat",
      "summer",
    ];
    return Helpers.getRandomEntry(tableName);
  }

  static getRandomWhereCondition() {
    let where =
      Helpers.getRandomEntry(fieldNames) +
      " = " +
      Helpers.getRandomInt(1, 100000);
    return where;
  }

  static getRandomGroupByCondition(lineQty) {
    let groupBy = Helpers.getRandomInt(1, lineQty);
    return groupBy;
  }

  static getRandomOrderByCondition(lineQty) {
    let orderBy = Helpers.getRandomInt(1, lineQty);
    return orderBy;
  }

  static generateRandomCode(lines) {
    let firstLine =
      "SELECT" + ` ${SQL.getRandomFieldName()}${Helpers.addNewLine()}`;
    let fillerLineQty = parseInt(lines, 10);
    let fillerLines = [];
    //first loop is just for field names sorry
    for (let i = 1; i <= fillerLineQty; i++) {
      const lineOptions = [` ,${SQL.getRandomFieldName()}`];

      fillerLines.push(Helpers.getRandomEntry(lineOptions));
    }
    let lineBreak;
    if (fillerLineQty > 1) {
      lineBreak = Helpers.addNewLine();
    } else lineBreak = "";
    let fromStatement =
      lineBreak +
      "FROM" +
      ` ${SQL.getRandomSchemaName()}` +
      `.${SQL.getRandomTableName()}`;

    let whereCond = "";
    //this part is for the other functions like WHERE, GROUP BY etc.
    if (Helpers.getRandomInt(1, 10) <= 3) {
      whereCond = `${Helpers.addNewLine()}WHERE ${SQL.getRandomWhereCondition()}`;
    } else if (Helpers.getRandomInt(1, 10) <= 5) {
      whereCond = `${Helpers.addNewLine()}WHERE ${SQL.getRandomWhereCondition()}${SQL.getRandomOperator()}${SQL.getRandomWhereCondition()}`;
    }

    let groupByCond = "";
    if (Helpers.getRandomInt(1, 10) <= 5) {
      groupByCond = `${Helpers.addNewLine()}GROUP BY ${SQL.getRandomGroupByCondition(
        fillerLineQty
      )}`;
    } else;

    let orderByCond = "";
    if (Helpers.getRandomInt(1, 10) <= 5) {
      groupByCond = `${Helpers.addNewLine()}ORDER BY ${SQL.getRandomOrderByCondition(
        fillerLineQty
      )} ASC`;
    } else;

    const lastLine = ";";
    return (
      firstLine +
      fillerLines.join(Helpers.addNewLine()) +
      fromStatement +
      whereCond +
      groupByCond +
      orderByCond +
      lastLine
    );
  }
}
