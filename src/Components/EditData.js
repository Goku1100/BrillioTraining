import React from 'react'

const EditData = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const divStyle = {
        margin: "auto", display: "table"
    }
    return (
        <div className="container">
            <br />
            <h1 style={{ textAlign: "center" }}>Edit Data</h1><br />
            <form style={divStyle} >
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="Name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="password" placeholder="Password" />
                </div>
                <button onClick={details} className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default EditData
