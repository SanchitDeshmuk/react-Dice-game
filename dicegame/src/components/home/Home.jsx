import React from 'react'
import style from './homestyle.module.css'

function Home({toggle}) {
  return (
    <>
    <div className={`${style.container}`}>

        <div className="box1">
            <img src="/images/dice_home.png" alt="" />
        </div>

        <div className={`${style.box2}`}>
            <h1>DICE GAME</h1>
            <div className={`${style.buttonbox}`}>
            <button onClick={toggle}>Play Now</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Home