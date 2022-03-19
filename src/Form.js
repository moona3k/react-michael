import React from 'react'
import PrettyInputField from './PrettyInputField'
import MultiSelect from './MultiSelect'

// shorthand, syntactic sugar
// ES6 (initialize value, if UNDEFINED/EMPTY)
const helperFunction = (personName = []) => {
    if (!Array.isArray(personName)) {
        console.log('argument needs to be an array')
        return;
    }
    return personName.map(el => ({ email: el }))
}

// Pre-ES6
// const helperFunction = (personName) => {
//     // if argument is EMPTY, then automatically
//     // assign the argument as the intial value
//     if (!personName) {
//         personName = []
//     }
//     return personName.map(el => ({ email: el }))
// }

helperFunction(['daniel', 'michael']);

function Form() {
    const [email, setEmail] = React.useState('')
    const [personName, setPersonName] = React.useState([]);

    // before - array of strings
    // ex. ['Daniel', 'Michael']

    // after - array of objects with the schema of { name:  }
    // ex. [{ name: 'Daniel' }, { name: 'Michael' }]


    const handleSubmit = () => {

        let body = {
            email,
            collaborators: helperFunction(personName)
        }

        console.log('this is request body', body)
        fetch('url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
            .then((res) => console.log('submitted', res))
            .catch(err => console.log('error:', err));
    }

    return (
        <div style={{ border: '1px solid blue', padding: 32 }}>
            <PrettyInputField
                email={email}
                setEmail={setEmail}
            />
            <MultiSelect
                personName={personName}
                setPersonName={setPersonName}
            />
            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default Form