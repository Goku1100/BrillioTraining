import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Signup = ({addUser}) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();

    const submit=(e)=>{
        e.preventDefault();
        if(!name || !email || !password){
            alert("Name or Email or Password can't be Empty")
        }
        else{
            addUser(name,email,password)
            setName("");
            setPassword("");
            setEmail("");
            history.push({
                pathname: "/Login"
            })
        }
    }
    const divStyle={
        margin:"auto",display:"table"
    }
    return (
    <div className="container">
        <br/>
        <h1 style={{textAlign:"center"}}> Register yourself</h1><br/>
        <form style={divStyle}>
            <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="Name" placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" onClick={submit} className="btn btn-primary">Signup</button>
        </form>
    </div>
    )
}

export default Signup;