import {
  getRandomInt
} from "./helpers";

const fieldNames = [
    "customerNumber",
    "dinosaur_glass",
    "twoshoes_without_one",
    "data",
    "\"select\"",
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

    return `\n\r ${positionValues[Math.floor(Math.random() * positionValues.length)]} `;
  }

  static getRandomFieldName() {

    if(getRandomInt(1,10) <= 3){
        let alias = fieldNames[Math.floor(Math.random() * fieldNames.length)] 
            + ' AS '
            + fieldNames[Math.floor(Math.random() * fieldNames.length)];
        return alias;
    }
    else return fieldNames[Math.floor(Math.random() * fieldNames.length)];
  }

  static getRandomSchemaName() {
    const schemaName = [
      "schema" + getRandomInt(1,999),
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
    return schemaName[Math.floor(Math.random() * schemaName.length)];
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
    return tableName[Math.floor(Math.random() * tableName.length)];
  }

  static getRandomWhereCondition() {
    let where = fieldNames[Math.floor(Math.random() * fieldNames.length)] 
        + ' = '
        + getRandomInt(1,100000);
    return where;
  }

  static getRandomGroupByCondition(lineQty) {
    let groupBy = getRandomInt(1,lineQty);
    return groupBy;
  }

  static getRandomOrderByCondition(lineQty) {
    let orderBy = getRandomInt(1,lineQty);
    return orderBy;
  }

}
