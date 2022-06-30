import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect is get into effect when the whole page is loaded

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth)
      navigate('/');
  }, [])




    const collectData = async () => {
      console.warn(name, email, password);
      let result = await fetch("http://localhost:5000/register", {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type" : 'application/json'
        }
      })
      result = await result.json();
      console.warn(result);
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/');
    }

  return (
      <div className='register'>
          <h1>Register</h1>
          <input className="inputBox" type="text" placeholder='Enter your Name'
          value={name} onChange = {(e) => setName(e.target.value)}
          ></input>
          <input className="inputBox" type="text" placeholder='Enter your Email'
          value={email} onChange = {(e) => {setEmail(e.target.value)}}
          ></input>
          <input className="inputBox" type="password" placeholder='Enter your Password'
          value={password} onChange = {(e) => setPassword(e.target.value)}
          ></input>

          <button className = "appButton" type='button' onClick={collectData}>SignUp</button>
    </div>
  )
}

export default SignUp