import React from 'react'
import style from './rulesStyle.module.css'

function Rules() {
  return (
    <>
    <div className={`${style.container}`}>
        <h1>How to play dice game</h1>
        <p>Select any number <br /> Click on dice image <br /> after click on  dice  if selected number is equal to dice number you will get same point as dice <br /> if you get wrong guess then  2 point will be dedcuted </p>
    </div>
    </>
  )
}

export default Rules