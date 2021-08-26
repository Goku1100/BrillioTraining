import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home'
import UsersList from './Components/UsersList' 
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import NavBar from './Components/NavBar';

function App() {
  let initData;
  if (localStorage.getItem("userData") === null) {
    initData = [];
  }
  else {
    initData = JSON.parse(localStorage.getItem("userData"));
  }

  const [data, setData] = useState(initData);

  const addUser = (name, email, password) => {
    let sno;
    if (data.length === 0) {
      sno = 1;
    }
    else {
      sno = data[data.length - 1].sno + 1;
    }
    const val = {
      sno: sno,
      name: name,
      email: email,
      password: password
    }
    setData([...data, val])
  }

  const onDelete = (userToBeDeleted) => {
    setData(data.filter((user) => user !== userToBeDeleted))
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
    console.log(data);
  }, [data])

  
  return (
    <>
      <Router>

        <Route exact path="/"><Login data={data} /></Route>
        <Route exact path="/Login"><Login data={data} /></Route>
        <Route exact path="/SignUp"><Signup addUser={addUser} /></Route>
        <Switch>
          <Route exact path="/Home"><Home/></Route>  
          <Route exact path="/UserList"><UsersList onDelete={onDelete} data={data}/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
