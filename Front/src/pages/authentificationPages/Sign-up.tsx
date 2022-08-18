import "./styles/Sign-up.css"
import { useState, useEffect} from "react";


const SignUp = () => {
    let [getUsername, setUsername] = useState([{username:""}]);
    let [getPassword, setPassword] = useState([{password:""}]);
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                getUsername,
                getPassword
            })
        };
        fetch(`/authenticate/login`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setUsername(data.username)
                setPassword(data.password)
            });
    }, []);
    return(
        <div className="login-wrapper">
            <h1>Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default SignUp