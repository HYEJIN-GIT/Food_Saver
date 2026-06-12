import React, { useState } from 'react'
import './Homepage.css'
const Homepage = () => {
  const [isOpen,setIsOpen]  = useState(false)
  const freezerOpen = ()=>{
    console.log("클릭")
    setIsOpen(prev => !prev)
  
  }
  return (
    <div className='home'>
      <div className='main-section'>
        <div className='fridge-box'>
          <div className='freezer' onClick={freezerOpen}>
            <div className='freezer-inside'>
            🥚 🥛 🥬
            </div>
            <div className={`freezer-door ${isOpen ? "open":""}`}></div>
          </div>
          <div className='refrigerator'>
             <div className='inside'>
                <button>로그인</button>

             </div>
             <div className='door'></div>
          </div>
        </div>
        <div className='intro-text'>
     
        </div>
      </div>


      
    </div>
  )
}

export default Homepage
