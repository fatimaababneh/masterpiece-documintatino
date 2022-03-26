import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Form = () => {

    const handleSubmit= (e)=>{
        e.preventDefault();
        let data={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }

        let jsonData = JSON.stringify(data);
        let head={
            headers:{
                'Content-Type':'application/json'
            }
        }
        axios.post('http://127.0.0.1:8000/api/register/', jsonData, head)
        .then(res=>console.log(res))
    }
  return (
    <div className='container-sign'>

            <div className='form-style'>

             <form className='sign-form' onSubmit={(e)=>handleSubmit(e)} method='POST' >
                <h2>SignUp</h2>
                <input type='text' placeholder='UserName' name='name'></input>
                <input type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' placeholder='Email' name='email'></input>
                <input type='password' placeholder='Password' name='password'></input>
                <input type='password' placeholder='EnsurePassword' name='ensurepassword'></input>
                <button type='submit' >SignUp</button> <div><h5>I already have an account</h5><Link to="/Login">LogIn</Link></div>

            </form>

            </div>
        </div>
  )
}
