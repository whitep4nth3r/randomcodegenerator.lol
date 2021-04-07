import {
	getRandomEntry,
	getRandomInt,
	getRandomSingleCharacter,
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
		const variableName=getRandomNoun();
		return `Dim ${variableName} As ${keyWord} \n\r    ${variableName} = ${getRandomInt(0,99999)}`;
	}
	
	static getRandomFillerLine() {
		const options = [
		  `Print ${getRandomLogLine()}`,
		  VBA.getRandomVariableDeclaration(),
		  VBA.getRandomNewVariableDeclaration(),
		  VBA.getRandomMethodCall(),
		  VBA.getRandomForLoopAsArray(),
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
		return `${this.getRandomMethodName()}( ${getRandomNoun()} )`;
	}
	
	static getRandomAccessModifier() {
		const options = ["Public", "Private", ""];
	
		return getRandomEntry(options);
	}
	static getRandomForLoopAsArray() {
		const randomChar = getRandomSingleCharacter();

		return `For ${randomChar} = 0 to ${getRandomInt(1,4000)}\n\r        If ${randomChar} > 666 Then\n\r            ${VBA.getRandomFunctionName()}(${randomChar})\n\r        End If\n\r    Next`
		  ;

	  }
		
}