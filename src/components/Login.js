import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth)
            navigate("/");
    }, [])


    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");

        }
        else
            alert("Please enter correct detail");
    }

  return (
    <div className='login'>
          <h1>Login</h1>
          <input className="inputBox" type="text" placeholder='Enter your Email'
          value={email} onChange = {(e) => {setEmail(e.target.value)}}
          ></input>
          <input className="inputBox" type="password" placeholder='Enter your Password'
          value={password} onChange = {(e) => setPassword(e.target.value)}
          ></input>

          <button className = "appButton" type='button' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login