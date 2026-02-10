import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState([])

  async function getdata() {
    try {
      const response = await fetch("http://localhost:4005/msg")
      const res = await response.json()
      console.log(res)
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <>
      <h1>Messages</h1>
      {}
      {JSON.stringify(data)}
    </>
  )
}

export default App
