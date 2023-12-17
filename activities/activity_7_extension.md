# Activity 7 - Extensions

Congratulations for getting this far!

There are just a few things we could do to make our app _even better_ 🔥

## Extension 1 - Test Form Submission

Remember we wrote a basic form submit handler that logs all the form data to the console?

At the time we just bound an event to the button. But you may recall that form submit is a thing!

👉 Can you bind a handler to the onSubmit method for the form? And get the button click to call it? (Hint: look into `<input type='submit'>` and `<form onsubmit>`)

👉 Can you write a test which mocks the submit handler and checks it is called when necessary? (Hint: remember the `userEvent` library to simulate users clicking or pressing Enter)

## Extension 2 - DRY

It's kind of messy to have a separate component for each input field. It would be really nice to have a generic `<TextInput>` component, at least to share the three text inputs if nothing else.

## Well done!

Amazing how much effort can go into a tiny form, right?! Well done for saving the Earth with your React testing skills. Take a deep breath and have a lovely day.
