import { FormInputObject, InitialValue} from "../data/alien_form_data";

const useValidate = (formDataArray: Array<FormInputObject>, input:InitialValue)=> {

	function validateInput(title: string, regex: Array<RegExp>, value: 
		string, message: Array<string>): Array<string> {
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
	}

	function validateInputField(title:string, regex: Array<RegExp>, value: string, 
		message: Array<string>) {
		return validateInput(title, regex, value, message)
				.reduce((acc: string, message: string) => acc+"; "+message, "")
				.replace("; ", "");
	}

	return formDataArray.reduce((acc: InitialValue, dataObject: FormInputObject) => {
		const messageString = validateInputField(dataObject.title, 
			dataObject.regex, input[dataObject.role], 
			dataObject.errorMessage);
			return {...acc, [dataObject.role]: messageString}; 
		}, {});

};

export default useValidate;