import { useEffect, useState } from "react";


function Usersignup() {

    const [formData, setFormData] = useState({email_address: "", password: "", first_name: "", last_name: ""})
    const [email_address, setEmail_address] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    // const [error, setError] = useState('');

    function handleSignUp(e) {
        e.preventDefault();
        console.log("hitting this thing")
    
        // if (formData.password !== passwordConfirm) {
        //   setError('Passwords do not match');
        //   return;
        // }
    
        // submit the form data to the backend here
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(console.log)

    }

    return(
        <div>
            <form onSubmit={handleSignUp}>
    <div className="email-pass-align">
    <small>Email Address:</small><input type="text" name="email_address" id="email_address" value={formData["email_address"]} onChange={(e) => setFormData({...formData, email_address: e.target.value})}/>
    <small>Password:</small><input type="password" name="password" id="password" value={formData["password"]} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
    <small>First Name:</small><input type="text" name="first_name" id="first_name" value={formData["first_name"]} onChange={(e) => setFormData({...formData, first_name: e.target.value})}/>
    <small>Last Name:</small><input type="text" name="last_name" id="last_name" value={formData["last_name"]} onChange={(e) => setFormData({...formData, last_name: e.target.value})}/>    
        {/* <div className="password-confirm-align">
            <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder = "Confirm Password"/>
        </div> */}
    <br/>
    <button type="submit">
        Sign Up!
    </button>
    </div>
</form>
        </div>
    )

}

export default Usersignup