import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login({toggleLoggedIn, setCurrentUser}) {
    const [formData, setFormData] = useState({email_address: "", password: ""})
    const navigate = useNavigate()

    function onLogin() {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(r => {
            if (r.email_address) {
                localStorage.removeItem("error")
                localStorage.email_address = r.email_address
                setCurrentUser(r)
                navigate('/MyCharacter')
            } else {
                localStorage.error = "invalid email/password combination"
            }
            setFormData({email_address: "", password: ""})
            toggleLoggedIn()
        })
    }
    
    function logout() {
        fetch("http://localhost:3000/logout")
        .then(setFormData({email_address: "", password: ""}))
        localStorage.removeItem("email_address")
        setCurrentUser()
        toggleLoggedIn()
    }

    return(
        localStorage.email_address ?
        
        <div className='logout-align'>
            <p>
                logged in as {localStorage.email_address}!<br/>

                    <button onClick={() => logout()}>Logout</button>
                
            </p>
        </div>
        :
        <div className='login-container'>
            <header>Please sign in</header>
            <p>
                <b><small>{localStorage.error ? localStorage.error : null}</small></b><br />
                
                <small>Email:</small><input type="text" name="email_address" id="email_address" value={formData["email_address"]} onChange={(e) => setFormData({...formData, email_address: e.target.value})}></input><br />
                
                <small>password:</small><input type="password" name="password" id="password" value={formData["password"]} onChange={(e) => setFormData({...formData, password: e.target.value})}></input><br />
    
                <button onClick={() => onLogin()}>login</button>
            </p>
        </div>
    )
}

export default Login

{/* <small>username:</small><input type="text" name="email" id="email" value={formData["email"]} onChange={(e) => setFormData({...formData, email: e.target.value})}></input><br />
<small>password:</small><input type="password" name="password" id="password" value={formData["password"]} onChange={(e) => setFormData({...formData, password: e.target.value})}></input><br />
<button onClick={() => onLogin()}>login</button> */}