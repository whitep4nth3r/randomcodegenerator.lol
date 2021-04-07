import {
	getRandomEntry,
	getRandomInt,
	getRandomNounUpperCase,
	getRandomVerbUpperCase,
	getRandomNounCapitalized,
	getRandomVerbCapitalized,
	getRandomLogLine,
	getRandomNoun
} from "./helpers";

export default class VBA {
	static getRandomMethodName() {
		return `${getRandomVerbCapitalized()}${getRandomNounCapitalized()}`;
	}
	static getRandomFunctionName() {
		return `${getRandomVerbCapitalized()}${getRandomNounCapitalized()}`;
	}

	static getRandomDataType() {
		const keyWords = ["Integer", "String", "Double", "Single", "Date", "Boolean","Excel.Application","Access.Application","Word.Application","DAO.Recordset","Object","DAO.Database","Variant"];
	
		var keyWord = getRandomEntry(keyWords);
		return `${keyWord}`;
	}

	static getRandomVariableDeclaration() {
	
		var keyWord = `${VBA.getRandomDataType()}`;
		return `Dim ${getRandomNoun()} As ${keyWord} \n\r ${keyWord}=${getRandomInt()}`;
	}
	
	static getRandomFillerLine() {
		const options = [
		  `Print ${getRandomLogLine()}`,
		  VBA.getRandomVariableDeclaration(),
		  VBA.getRandomNewVariableDeclaration(),
		  VBA.getRandomMethodCall(),
		  `On Error Resume Next 'DON'T ever do this! `
		];
		return getRandomEntry(options);
	}
	
	static getRandomNewVariableDeclaration() {
		const keyWords = [
		  "Dim","Static"
		];
	
		var keyWord = getRandomEntry(keyWords);
		return `${keyWord} ${getRandomNoun()} As ${VBA.getRandomDataType()}`;
	 }
	
	static getRandomMethodCall() {
		return `${this.getRandomMethodName()}(${VBA.getRandomMethodName()} As ${VBA.getRandomDataType()})`;
	}
	
	static getRandomAccessModifier() {
		const options = ["Public", "Private", ""];
	
		return getRandomEntry(options);
	}
	
}