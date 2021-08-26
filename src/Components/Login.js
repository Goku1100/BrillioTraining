import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
const Login = ({ data }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const details = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Email or Password can't be Empty")
        }
        else {
            let check=data.filter((val) => { return val.email === email && val.password === password })
            if (check.length >= 1) {
                history.push({
                    pathname: "/Home",
                    state: {
                        username: check[0].name
                    }
                })
            }
            else {
                alert("Please verify credentials")
                setPassword("");
                setEmail("");
            }
        }
    }
    const divStyle = {
        margin: "auto", display: "table"
    }
    return (
        <div className="container">
            <br />
            <h1 style={{ textAlign: "center" }}>Login</h1><br />
            <form style={divStyle} >
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="password" placeholder="Password" />
                </div>
                <button onClick={details} className="btn btn-primary">Login</button>
                <Link to="/SignUp"><button className="btn btn-primary" style={{ marginLeft: "15px" }}>Sign Up</button></Link>
            </form>
        </div>
    )
}

export default Login
