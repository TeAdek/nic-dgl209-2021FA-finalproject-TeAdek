import React,{useState} from 'react'
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../gqloperation/mutation';
import { useNavigate } from 'react-router';

const Signup = () => {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({})
    const [signupUser,{loading,error,data}] = useMutation(SIGNUP_USER)

    if(loading) return <h1>sigining up ...</h1>
    if(data){
      localStorage.setItem("jwt",data.register.jwt)
      navigate('/')
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        signupUser({
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
                <div className="card-panel red">{error.message}</div>
            }
            <div className='form'>
           <h3>Sign-Up </h3>
           <form onSubmit={handleSubmit}>
           <p className='form-text'>Username</p>
               <input 
                 type="text" 
                 name="username"
                 onChange={handleChange}
                 required
               />
               <p className='form-text'>E-mail address</p>
               <input 
                 type="email" 
                 name="email"
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
               <button type="submit" className="btn btn-primary">Signup</button>
           </form>
           </div>
        </div>
    )
}

export default Signup