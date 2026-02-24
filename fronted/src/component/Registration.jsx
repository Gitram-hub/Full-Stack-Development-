import React, { useState } from 'react'

function Registration() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function handleSubmit(e){
    e.preventDefault()

    const data={name,email,password}

    const response=await fetch('http://localhost:4002/register',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{'Content-Type':'application/json'}
    })

    const jsonres=await response.json()
    alert(jsonres.msg)
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" 
            onChange={(e)=>setName(e.target.value)} 
            className="form-control" 
            id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" 
            onChange={(e)=>setEmail(e.target.value)} 
            className="form-control" 
            id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" 
            onChange={(e)=>setPassword(e.target.value)} 
            className="form-control" 
            id="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  )
}

export default Registration