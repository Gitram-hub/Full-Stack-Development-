import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import Icard from './component/Icard'
import Book from './component/Book'
import StateHandel from './component/StateHandel'
import ImageManupulation from './component/ImageManupulation'

function App() {
  const [count, setCount] = useState(0);
  const books = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvlvXBwvZLUGm3Fl3lpDIRqCuiT0InCdf52GDKb6JZzY9dKjhf-QYEpeAahHnEBoEGSjNSHX9F_sB1wTUHLRn4ESfXpBtOT47kJdLxMaNgJb-Ja9MnN7rx',
    author: 'Author One',
    publisher: 'Publisher One',
    price: 250,
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvlvXBwvZLUGm3Fl3lpDIRqCuiT0InCdf52GDKb6JZzY9dKjhf-QYEpeAahHnEBoEGSjNSHX9F_sB1wTUHLRn4ESfXpBtOT47kJdLxMaNgJb-Ja9MnN7rx',
    author: 'Author Two',
    publisher: 'Publisher Two',
    price: 300,
  },
  {
    id: 3,
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvlvXBwvZLUGm3Fl3lpDIRqCuiT0InCdf52GDKb6JZzY9dKjhf-QYEpeAahHnEBoEGSjNSHX9F_sB1wTUHLRn4ESfXpBtOT47kJdLxMaNgJb-Ja9MnN7rx',
    author: 'Author Three',
    publisher: 'Publisher Three',
    price: 150,
  },
  {
    id: 3,
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvlvXBwvZLUGm3Fl3lpDIRqCuiT0InCdf52GDKb6JZzY9dKjhf-QYEpeAahHnEBoEGSjNSHX9F_sB1wTUHLRn4ESfXpBtOT47kJdLxMaNgJb-Ja9MnN7rx',
    author: 'Author four',
    publisher: 'Publisher four',
    price: 350,
  },
];
  return (
    <>
     <ImageManupulation/>
      {/* <StateHandel/> */}
      <Book books={books}/>
{/*   
     <Icard name="Ram" branch="CSE" college="ABES engineering college" age='19' location="Ghaziabad "/> */}
    </>
  )
}

export default App
