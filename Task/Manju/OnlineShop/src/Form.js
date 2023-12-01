import { useState } from 'react';
import  img from   './assets/images.png'
import React from 'react';
export default function Form() {

// States for product search
const [mailid, setmailid] = useState('');
const [password, setpassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handlemailid = (e) => {
setmailid(e.target.value);
setSubmitted(false);
};

// Handling the email password
const handlepassword = (e) => {
setpassword(e.target.value);
setSubmitted(false);
};


// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (mailid === '' || password === '' ) {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1> {mailid} and {password} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form">
<div>
<center><h1>Sign-Up Page</h1></center>
</div>
<img src={img} alt='images'></img>
{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">EmailId</label>
<input onChange={handlemailid} className="input"
value={mailid} type="email" />

<label className="label">password</label>
<input onChange={handlepassword} className="input"
value={password} type="password" />

<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}