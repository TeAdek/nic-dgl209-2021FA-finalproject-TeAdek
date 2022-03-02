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
        <div>
            {
                error && 
                <div>{error.message}</div>
            }
           <h3>Login </h3>
           <form onSubmit={handleSubmit}>
               <input 
                 type="text" 
                 placeholder="email or username"
                 name="identifier"
                 onChange={handleChange}
                 required
               />
               <input 
                 type="password" 
                 placeholder="password"
                 name="password"
                 onChange={handleChange}
                 required
               />
               <button type="submit" className="btn blue">Login</button>
           </form>

           <p>Don't have an account? <Link to="/sign-in">Create a New Account</Link> </p>
        </div>
    )
}

export default Login;