import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 

  async function verification(e){
    e.preventDefault()

    try{
      const response = await fetch('http://localhost:4002/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
      })

      const data = await response.json()

      if(response.ok){
        if(data.msg=="Login successfully")
        {   
            const navigate=useNavigate();
            alert(data.msg || "Login Success")
            navigate('/dashboard')

        }
        
  
      
      }else{
        alert(data.msg || "Invalid login")
      }

    }catch(err){
      alert("Server error")
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{width:"400px"}}>

        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={verification}>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login