# Activity 5 - Validation

We have a simple form rendering and all the state is stored in one place! That's pretty cool.

But the aliens are very finicky about their form and insist that each field conforms to some precise requirements. Let's look at what they want:

-   **Species Name**: Must be between 3 and 23 characters. No numbers or special characters allowed!

-   **Planet Name**: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.

-   **Number of beings**: Numbers ONLY. Must be at least 1,000,000,000.

-   **What is 2 + 2**: "4" must be selected. Selecting "Not 4" should display an error.

-   **Reason for sparing**: Must be between 17 and 153 characters.

It's unclear how a species is supposed to make a case in just 17 characters, but the client is always right 🙃

(even if they are aliens hellbent on the destruction of all things)

## Step 1 - Add validation rules

🤔 Where is the best place to validate the data?

Each component receives a `value` prop. Whenever that value changes, we would like to validate that data.

💡 Perhaps the neatest way would be for us to pass a validation function into each component:

```JSX
// W12MForm.tsx
import { validateSpeciesName } from './validate/validate_species_name';

// ... rest of form...
<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} validate={validateSpeciesName} />
```

Then in the component, we can add this extra line:

```TSX

	const SpeciesName : React.FC<SpeciesNameProps> = (props) => {

		// 👇
		const errorMessage = props.validate(props.value);

		return(
			// rest of component here
			<ErrorMessage message={errorMessage} />
		);

		}
```

👉 Add an `<ErrorMessage/>` component inside each field. This should take `errorMessage` as a prop, and its job is to display the error IN RED if there's a message, or to display nothing if no errors.

🤔 But wait! What if there's MORE THAN ONE error? It's possible for more than one rule to be broken at a time, right?!

💡 Maybe this would be better if we called it `errorMessages` and made it a `string[]` - then if the length of the array is 0 you'll know there's no errors. This way you can show multiple errors if there are any!

👉 You'll need to write the validation function:

```TSX
// validate_species_name.ts
const validateSpeciesName : (speciesName : string) => string[] = (speciesName) => {
	// validation code here
	// needs to return an array of error messages
	// or an empty array if there aren't any
};
```

👉 Use this pattern to add a `validate` function as a prop to each field which uses the rules the aliens gave us. 👾

👉 Each field should now display red error message(s) if invalid data is entered.

We're nearly done!

Don't forget to take a break 🌯

All we have to do now is add some tests to make sure we did this step right! Move onto [Activity 6](./activity_6.md)
