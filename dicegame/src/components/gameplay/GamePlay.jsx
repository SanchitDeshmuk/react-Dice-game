import React, { useEffect, useState } from 'react'
import style from './gameplaystyle.module.css'
import Rules from './../rules/Rules';

function GamePlay() {
  const arrNumber = [1,2,3,4,5,6]

  const [selectedNumber,setSelectedNumber] = useState(1)
  const [currentDice,setCurrentDice] = useState(1)
  const [numberSelected,setNumberSelected] = useState(false)
  const [score,setScore] = useState(0)
  const [showRules,setShowRules] = useState(false)
  const [randomNumber,setRandomNumber] = useState(0)

  useEffect(()=>{
    setRandomNumber(Math.floor(Math.random()*6)+1)
  },[selectedNumber,score,numberSelected])

  const rollDice = (min,max)=>{
    setCurrentDice(randomNumber)
    setNumberSelected(false)
    setShowRules(false)
    if(numberSelected == false){
      alert("select a number")
      return
    }
    if(selectedNumber === randomNumber){
      setScore(score+randomNumber)
    }
    else{
      setScore(score-2)
    }
  }

  const selectNumber = (value)=>{
    setShowRules(false)
    setSelectedNumber(value)
    setNumberSelected(true)
  }

  const resetScore = ()=>{
    setShowRules(false)
    setScore(0)
  }

  const displayRules = ()=>{
    setShowRules(true)
  }

  return (
    <>

      <div className={`${style.container}`}>
        <div className={`${style.score}`}>
          <h1>{score}</h1>
          <h3>Total Score</h3>
        </div>

        <div className={`${style.numberButtonContainer}`}>
          {arrNumber.map((value,i)=>(
            <button key={i}
            onClick={()=>selectNumber(value)}
            className={selectedNumber === value ? `${style.clickButtonsStyle}`: ''}
            >{value}</button>
          ))}
        </div>

      </div>

      <div className={`${style.selectNumber}`}>
      <h3>Select Number</h3>
      </div>

      <div className={`${style.box}`}>
        <img src={`/images/dice_${currentDice}.png`} alt="" onClick={()=>rollDice(1,6)}/>
        <h2>Click on Dice to roll</h2>
        <button onClick={resetScore}>Reset Score</button>
        <button onClick={displayRules}>Show Rules</button>
      </div>
      
      {showRules ? <Rules/> : ""}

    </>
  )
}

export default GamePlay