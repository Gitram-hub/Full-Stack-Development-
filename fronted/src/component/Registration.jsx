import React, { useState } from 'react'

function Registration() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)

    const data={name,email,password}

    const response=await fetch('http://localhost:4002/register',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{'Content-Type':'application/json'}
    })

    const jsonres=await response.json()
    alert(jsonres.msg)
    setLoading(false)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded-4" style={{width:"400px"}}>
        
        <h3 className="text-center mb-4 text-primary">Create Account</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="d-grid">
            <button 
              type="submit" 
              className="btn btn-primary btn-lg"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Registration