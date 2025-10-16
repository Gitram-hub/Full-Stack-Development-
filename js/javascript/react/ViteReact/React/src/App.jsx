import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import Icard from './component/Icard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
  
     <Icard name="Ram" branch="CSE" college="ABES engineering college" age='19' location="Ghaziabad "/>
    </>
  )
}

export default App
