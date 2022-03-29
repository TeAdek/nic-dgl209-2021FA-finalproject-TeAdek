import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import {LOGIN_USER } from '../gqloperation/mutation';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({})
    const [loginUser,{loading,error,data}] = useMutation(LOGIN_USER)

    if(loading) return <h1>logging in...</h1>
    if(data){
        localStorage.setItem("jwt",data.login.jwt)
        navigate("/")
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        loginUser({
            variables:{
                input:formData
            }
        })
    }
    
    const handleChange = (e)=>{
          setFormData({
            ...formData,
            [e.target.name]:e.target.value
          })
    }
    return (
        <div className='form-center'>
            {
                error && 
                <div>{error.message}</div>
            }
            <div className='form'>
           <h3>Login </h3>
           <form onSubmit={handleSubmit}>
               <p className='form-text'>E-mail address</p>
               <input 
                 type="text" 
                 name="identifier"
                 onChange={handleChange}
                 required
               />
               <p className='form-text'>Password</p>
               <input 
                 type="password" 
                 name="password"
                 onChange={handleChange}
                 required
               />
               <button type="submit" className="btn btn-primary">Login</button>
           </form>
           <p>Don't have an account? <Link to="/sign-in">Sign Up</Link> </p>

           </div> 
        </div>
    )
}

export default Login;