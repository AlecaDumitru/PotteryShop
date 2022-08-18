import "./styles/Sign-up.css"
import {useEffect, useState} from "react";

const Register = () => {
    const [getPassword, setPassword] = useState([{password:""}]);
    const [getUsername, setUsername] = useState(([{username:""}]));
    useEffect(() => {
        fetch(`/authenticate/register`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    getUsername,
                    getPassword
                })
            })
            .then(response => response.json())
            .then((response) => {
                setPassword(response.password)
                setUsername(response.username)
            })
    }, [])
    return(
        <div className="login-wrapper">
            <h1>Register</h1>
    <form>
    <label>
        <p>Username</p>
    <input type="text" />
        </label>
        <label>
        <p>Password</p>
        <input type="password" />
    </label>
    <div>
    <button type="submit">Submit</button>
        </div>
        </form>
        </div>
)
}

export default Register