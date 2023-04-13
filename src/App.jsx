import { useState } from 'react'
import { useRoutes} from 'react-router-dom'
import ReadGamer from './pages/ReadGamer.jsx'
import CreateGamer from './pages/CreateGamer.jsx'
import EditGamer from './pages/EditGamer.jsx'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  // Set up games
  const games = [];
  // Set up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadGamer data={games} />
    },
    {
      path: "edit/:id",
      element: <EditGamer data={games} />
    },
    {
      path: "/new",
      element: <CreateGamer />
    }
  ]);
  return (
    <div className="App">
      <div className='header'>
        <h1> Welcome to the Gamer Gallery! </h1>
        <Link to="/"><button className="headerBtn"> View Gamers 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create  a Gamer! ඞ </button></Link>
      </div>
      {element}
    </div>
  )
}

export default App
