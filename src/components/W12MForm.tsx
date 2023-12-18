import { useState, ChangeEvent, MouseEvent} from 'react';
import W12MHeader from './W12MHeader';
import {TextInput} from './text_input';
import { SelectInput } from './select_input';
import { TextAreaInput } from './text_area_input';
import { Output } from './output';
import { SubmitButton } from './submit_button';
import { formTextInput, formSelectInput, formTextAreaInput, formDataArray, initialValues,
FormInputObject, FormSelectInputObject, FormTextAreaInputObject}
from '../data/alien_form_data';
import { validateInput } from "../validate/validate_input";
export interface InputProps {
	title: string;
	role: string;
	value: string;
	regex: Array<RegExp>;
	message: Array<string>;
	submitted: boolean;
	validate: (title:string, regex: Array<RegExp>, value: string, message: Array<string>) => string;
}

const W12MForm = () => {
	
	const [input, setInput] = useState({...initialValues});
	const [errors, setErrors] = useState({...initialValues});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
		setSubmitted(true);
	}

	function handleChange(event: ChangeEvent<HTMLInputElement> | 
		ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();
		setInput((currentData) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
		saveErrors(event.target.id, event.target.value);
	}

	function saveErrors(dataRole: string, inputValue:string) {

		const dataObject = formDataArray.find((dataObject: FormInputObject) =>
		dataObject.role === dataRole);

		if (dataObject) {
			const errorString = validateInputField(dataObject.title, 
				dataObject.regex, inputValue, dataObject.errorMessage);
			setErrors((currentErrors) =>
				Object.assign({}, currentErrors, {
					[dataRole]: errorString,
				})
			)
		}
	}

	function validateInputField(title:string, regex: Array<RegExp>, value: string, 
		message: Array<string>) {
		const errorMessage  = validateInput(title, regex, value, message)
				.reduce((acc: string, message: string) => acc+"; "+message, "")
				.replace("; ", "");
		return errorMessage;
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div className = "col-50-left">

			{formTextInput.map((field: FormInputObject, i: number) => 

			<TextInput 
				key = {formTextInput[i].id}
				title = {formTextInput[i].title} 
				regex={formTextInput[i].regex} 
				message = {formTextInput[i].errorMessage}
				value={input[formTextInput[i].role]} 
				onChange={handleChange} 
				submitted={submitted}
				validate = {validateInputField} 
				role = {formTextInput[i].role} 
			/>)
			}

			{formSelectInput.map((field: FormSelectInputObject, i: number) => 

				<SelectInput
				key = {formSelectInput[i].id}
				title = {formSelectInput[i].title} 
				regex={formSelectInput[i].regex} 
				message = {formSelectInput[i].errorMessage}
				value={input[formSelectInput[i].role]} 
				onChange={handleChange} 
				submitted={submitted}
				validate = {validateInputField} 
				role = {formSelectInput[i].role} 
				options = {formSelectInput[i].options}
				/>)
			}

			{formTextAreaInput.map((field: FormTextAreaInputObject, i: number) => 

			<TextAreaInput 
				key = {formSelectInput[i].id}
				title = {formTextAreaInput[i].title} 
				regex={formTextAreaInput[i].regex} 
				message = {formTextAreaInput[i].errorMessage}
				value={input[formTextAreaInput[i].role]} 
				onChange={handleChange} 
				submitted={submitted}
				validate = {validateInputField} 
				role = {formTextAreaInput[i].role} 
				size = {formTextAreaInput[i].size}
			/>)
			}

			<SubmitButton 
			buttonText = "Submit Application" 
			id="submitAlienDataButton" 
			role="submitButton"
			onSubmitHandler = {handleSubmit}
			errorMessages = {errors}
			/>
			</div>

			{formDataArray.map((field: FormInputObject, i: number) => 
			<Output 
				key = {formDataArray[i].id}
				title = {formDataArray[i].title} 
				value = {input[formDataArray[i].role]} 
				errorMessage = {errors[formDataArray[i].role]}
				role = {formDataArray[i].role} 
				regex={formDataArray[i].regex} 
				validate = {validateInputField} submitted={submitted}/>
			)}
		</section>	
	);
};
export default W12MForm;
