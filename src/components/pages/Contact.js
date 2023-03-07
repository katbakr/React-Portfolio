import React, { useState } from 'react';
// import './style.css';
import './portfolio.css'


function ContactMe() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        // const { target } = e;
        // const inputType = target.name;
        // const inputValue = target.value;
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        // Based on the input type, we set the state of either email, username, and password
        // if (inputType === 'email') {
        //   setEmail(inputValue);
        // } else if (inputType === 'name') {
        //   setName(inputValue);
        // } else {
        //   setMessage(inputValue);
        // }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    return (
        <div>
            <section>
                <h1>Contact Me</h1>
                <form id="contact-form" onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleInputChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default ContactMe;