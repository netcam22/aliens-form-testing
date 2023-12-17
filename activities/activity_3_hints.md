# Activity 3 - Hints

Let's work through creating one of the fields.

Here's an example (but broken) React component for our SpeciesName:

```TSX
const SpeciesName : React.FC = () => (
    <>
        <label htmlFor='speciesName'>Species Name</label>
        <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} />
    </> );
```

---

The tricky part is figuring out where our `speciesName` and `onChangeSpeciesName` come from.

As we discussed already, we want our **form** to manage all of the individual `input` state data, so the form component always has access to everything entered.

So, in `W12MForm.tsx` we can add some code to hold the state for this component:

```TSX
// No need to specify useState<string> as TS will infer the type as string from the default
// NB: If we wanted it to be nullable, we'd have to specify:
//     useState<string | null>('humans');
const [speciesName, setSpeciesName] = useState('humans');
```

---

Then, also in `W12MForm.tsx`, we can pass the state value and a function to handle changing it into our `<SpeciesName/>` component:

```TSX
<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} />
```

💡 The `onChange` event for an input gives us an event parameter, often called `e`, which contains the new value held by the input, which is stored in `e.target`. We can pass the value of this target to our setter function from `useState` to update the state variable whenever the form changes - e.g. when the user types in the input box.

---

Of course, we'll have to update our `<SpeciesName>` component to receive those props, connecting the state in the form to the values we're using in the child component. Change this:

```TSX
const SpeciesName : React.FC = () => /* ... etc... */
```

to this:

```TSX
interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => <>Component goes here!</>
```

You might be wondering what that line: `React.ChangeEvent<HTMLInputElement>` is. Let's break it down! 🔨😃

React has built in types for DOM events which might fire. In the DOM, when an input changes, it fires a `ChangeEvent`. These are slightly different depending on which element is firing the event, so we have to specify if it's a `React.ChangeEvent<HTMLTextAreaElement>` or a `React.ChangeEvent<HTMLSelectElement>`, etc.

---

This is a bit of a hassle though, and it's kind of annoying having to write out such a long type.

If we want, we could clean it up!

👉 Change the type of the event on your `interface`, like so:

```JSX
interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
}
```

We'd like it to be a string, really, as this makes it easier to think about. We don't care very much about the details of the change event, but we DO want to know what the new value of the input is.

Now, in the component, we'll have a type error:

```JSX
const SpeciesName : React.FC = () => (
    <>
        <label htmlFor='speciesName'>Species Name</label>
        <input id='speciesName'
					type='text'
					value={speciesName}
					onChange={onChangeSpeciesName} /* ⚠️ ERROR HERE! */ />
    </> );
```

We can change this from a function that takes a `React.ChangeEvent` into a function that takes a string, by wrapping it in a little arrow function:

```JSX
const SpeciesName : React.FC = () => (
    <>
        <label htmlFor='speciesName'>Species Name</label>
        <input id='speciesName'
					type='text'
					value={speciesName}
					onChange={(e) => onChangeSpeciesName(e.target.value)} />
    </> );
```

Now only this line of code needs to care about the event. Our form components can change to be simpler:

```JSX
// W12MForm.tsx

// replace this:
<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e) => setSpeciesName(e.target.value)} />

// with this:
<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
```

We've created an input which keeps its state in the form component and updates it with any changes. Even better, our form doesn't need to care about the DOM events which are firing - the component takes care of that and just tells the form the new string value 🥳

Once you've repeated this process for ALL the fields, you can return to [Activity 3](./activity_3.md) and continue from there.
