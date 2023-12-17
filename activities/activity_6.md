# Activity 6 - Testing our validation

Our components already have `.test.tsx` files. Now we just need to make sure we're also testing the validation logic too.

Remember how to pass props to a component in tests? Here's an example we looked at elsewhere:

```TSX
	it(`Given the required props,
		When the component is rendered,
		Then the appointment description should be present`, () => {
		const requiredProps : AppointmentProps = {
		id: 1,
		name: 'Harriet',
		description: 'A very special appointment',
		date: '3 Nov',
		confirmed: false,
		onConfirmed: () => {},
		};

    	render(<Appointment {...requiredProps} />);

    	expect(
    		screen.getByText('A very special appointment')
    	).toBeInTheDocument();
    });
```

Your task now is to:

👉 Add some new tests which pass in mocks for your validation functions. Then, in each test, get the validation function to return something different. For example:

```TypeScript
const mockValidateSpeciesName = jest.fn()l

mockValidateSpeciesName.mockReturnValue([]); // this would return no errors for this test
// OR
mockValidateSpeciesName.mockReturnValue(["Must be between 3 and 23 characters"]); // return one error
```

👉 Write tests which test that your components display the error messages that are returned from your validation functions.

For example, a test which returns NO errors from your mock validation function, you'd expect there to be no error messages in the document.

Then, in another test, a mock should return some error messages, and you expect those to be in the document.

👉 Don't forget to write test files for your validation functions themselves - these are just normal TS functions so you can test them as normal. Files like `validate_species_name.test.ts` would be useful, right?!

👉 Now if you run `npm test` you should get confirmation that all of your components are validating correctly in all possible circumstances.

The Earth is saved! 🌍💃🕺🥳 Have a well-deserved break. ☕

Form validation can get very complex, and there are many ways to approach it. I'm sure that if you made it this far you can see some of the drawbacks of this approach!

If you're feeling brave, you can take things just a little further with some extensions in [Activity 7 - This Time It's A Bit Harder](./activity_7_extension.md)
