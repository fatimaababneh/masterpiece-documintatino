import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
function Login() {
const navigate=useNavigate();
    const [password , setpassword] =useState(0);
    const [user, setUser] =useState('');
    const [error, setError]=useState("");
    let resp;
    const handleuser=(e)=>{
        e.preventDefault();
        let currentuser={
            email:e.target.username.value,
            password:e.target.password.value
        }
        
       axios.post('http://127.0.0.1:8000/api/log/', currentuser)
       .then(response=>{
          setUser(response.data);
        console.log(response.data)
    });
       if(user ){
            user['cart']=[];
            user['orders']=[];
            localStorage.setItem("loggeduser",JSON.stringify(user));
            if(user.role_as==0)
            navigate('/');
            else window.location.href='http://127.0.0.1:8000/dashboard';
        }
       if(typeof(user)=="string"){
        setError('Your email or password incorrect');
       }
       
    }
    return (
        <div className='container1'>
        <div className='form-styl'>
            <form className='containerlog' onSubmit={handleuser}>
            {console.log(error)}
                <h2>LogIn</h2>
                <input type="text" placeholder='UserName' name="username"></input>
                <input type="password" placeholder='Password' name="password"></input>
                <button>LogIn</button>
                <small style={{color:"red"}}>{error}</small>
                 <div><h5>if you don't have an account pleasse create one</h5><Link to="/Signup">SignUp</Link></div>
            </form>
        </div>
        </div>
    )
}

export default Login
