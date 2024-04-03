import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import GamePlay from './components/gameplay/GamePlay'

function App() {

  const [isGameStarted,setIsGameStarted] = useState(false)

  const toggleGameplay = ()=>{
    setIsGameStarted(!isGameStarted)
  }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <Home toggle={toggleGameplay}/>}
    </>
  )
}

export default App
