import React from 'react'

const MainContent = ({user}) => {
    return (
        <div className="container">
            {<h1>Hi {user ? user : "New User"}</h1>}
        </div>
    )
}

export default MainContent
