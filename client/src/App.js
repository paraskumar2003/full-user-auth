
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { Routes, Route,  Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

function App() {

  const [user,setUser] = useState(false);
  console.log(user);

  useEffect(()=>{
    const getUser = async()=>{
      fetch("http://localhost:4500/login/success",{
        method:'GET',
        credentials:'include',
        headers:{
          Accept:"application/json",
          "Content-Type":'application/json',
          "Access-Control-Allow-Credentials":true,
        },
      }).then((response)=>{
        if(response.status === 200) return response.json();
        throw new Error ('authentication failure');
      }).then(resObject=>{
          setUser(resObject.user);
      }).catch(err=>{
        console.log(err);
      })
    }
    getUser();
  },[]);
  return (
    <div className="App">
    <Navbar user={user}/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={user?<Post/>:<Login/>} />
    <Route path='/post/:id' element={user ? <Post/> :<Navigate to='/login'/>} />
    </Routes>
    </div>
  );
}

export default App;
