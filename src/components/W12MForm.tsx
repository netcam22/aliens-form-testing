import { useState, ChangeEvent, MouseEvent} from 'react';
import W12MHeader from './W12MHeader';
import {TextInput} from './text_input';
import { SelectInput } from './select_input';
import { TextAreaInput } from './text_area_input';
import { Output } from './output';
import { SubmitButton } from './submit_button';
import { formTextInput, formSelectInput, formTextAreaInput, formDataArray, initialValues,
FormInputObject, FormSelectInputObject, FormTextAreaInputObject, InitialValue}
from '../data/alien_form_data';
import useValidate from '../hooks/use_validate';
import useHasErrors from '../hooks/use_has_errors';
export interface InputProps {
	title: string;
	role: string;
	value: string;
	errorMessage: string;
	submitted: boolean;
}

const W12MForm = () => {
	
	const [input, setInput] = useState({...initialValues});
	const [submitted, setSubmitted] = useState(false);
	const errors: InitialValue = useValidate(formDataArray, input);
	const hasErrors: boolean = useHasErrors(errors);

	function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
		if (!submitted) {
			setSubmitted(true);
		}		
	}

	function handleChange(event: ChangeEvent<HTMLInputElement> | 
		ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();
		setInput((currentData) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
	}


	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div className = "col-50-left">

			{formTextInput.map((field: FormInputObject) => 

			<TextInput 
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				submitted={submitted}
				role = {field.role} 
			/>)
			}

			{formSelectInput.map((field: FormSelectInputObject) => 

				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				submitted={submitted} 
				role = {field.role} 
				options = {field.options}
				/>)
			}

			{formTextAreaInput.map((field: FormTextAreaInputObject) => 

			<TextAreaInput 
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				submitted={submitted} 
				role = {field.role} 
				size = {field.size}
			/>)
			}

			<SubmitButton 
			buttonText = "Submit Application" 
			id="submitAlienDataButton" 
			role="submitButton"
			onSubmitHandler = {handleSubmit}
			disable = {(submitted && hasErrors)}
			/>
			</div>

			{formDataArray.map((field: FormInputObject, i: number) => 
			<Output 
				key = {field.id}
				title = {field.title} 
				value = {input[field.role]} 
				errorMessage = {errors[field.role]}
				role = {field.role} 
				regex={field.regex} 
				submitted={submitted}/>
			)}
		</section>	
	);
};
export default W12MForm;
