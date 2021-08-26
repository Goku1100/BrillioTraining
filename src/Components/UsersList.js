import React from 'react'
import { Link } from 'react-router-dom'

const UsersList = ({data,onDelete}) => {
    
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>

                {data?<table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user,index) => {
                            return (<tr key={user.sno}>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to="/Home">
                                        View
                                    </Link>
                                    <Link className="btn btn-outline-primary mr-2">
                                        Edit
                                    </Link>
                                    <Link className="btn btn-danger" onClick={()=>{onDelete(user)}}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>:null}
            </div>
        </div>
    )
}

export default UsersList
