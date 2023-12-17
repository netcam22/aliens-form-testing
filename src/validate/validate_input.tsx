	
export const validateInput = 
(title: string, regex: Array<RegExp>, value: string, message: Array<string>): Array<string> => {

	// needs to return an array of error messages
	// or an empty array if there aren't any
	const errorArray : Array<string> = [];
	if (value === "") {
		errorArray.push(`${title} required`);
	}
	else {
		for (let i = 0; i< regex.length; i++) {
			if (!value.match(regex[i])) {
				errorArray.push(message[i]);
			}
		}
	}
	return errorArray;
};