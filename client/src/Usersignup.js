import { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "./Context/UserContext";


function Usersignup({toggleLoggedIn, setLoggedIn}) {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({email_address: "", password: "", first_name: "", last_name: ""})
    const [email_address, setEmail_address] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const {user, setUser} = useContext(UserContext)
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
        .then(res => {
            if(res.ok) {
                res.json().then(newUser => {
                    localStorage.user = JSON.stringify(newUser)
                    setUser(newUser)
                    // toggleLoggedIn()
                    // setLoggedIn(true) 
                navigate('/characters')})
                }
                else {
                    res.json().then(res => console.log(res))
                }})
    }

    return(
        <div>
            <div className="welcome-div">
                <p>
                    {`Welcome to Dungeons and Dragons (for Dummies!) 
                    To get started, please sign up below!`}
                </p>
            </div>
            <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignUp}>
    <small>Email Address:</small><input type="text" name="email_address" id="email_address" value={formData["email_address"]} onChange={(e) => setFormData({...formData, email_address: e.target.value})}/><br/>
    <small>Password:</small><input type="password" name="password" id="password" value={formData["password"]} onChange={(e) => setFormData({...formData, password: e.target.value})}/><br/>
    <small>First Name:</small><input type="text" name="first_name" id="first_name" value={formData["first_name"]} onChange={(e) => setFormData({...formData, first_name: e.target.value})}/><br/>
    <small>Last Name:</small><input type="text" name="last_name" id="last_name" value={formData["last_name"]} onChange={(e) => setFormData({...formData, last_name: e.target.value})}/><br/>    
        {/* <div className="password-confirm-align">
            <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder = "Confirm Password"/>
        </div> */}
    <br/>
    <button type="submit">
        Sign Up!
    </button>
</form>
</div>
        </div>
    )

}

export default Usersignup