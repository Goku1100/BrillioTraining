import React from 'react'
import NavBar from './NavBar';
import MainContent from './MainContent';
import { useLocation} from 'react-router-dom';
// import UsersList from './UsersList';
const Home = () => {
    const loc=useLocation();
    let user;
    if(loc.state){
        user=loc.state.username
    }
    return (
        <div>
            <MainContent user={user}/>
        </div>
    )
}
export default Home
