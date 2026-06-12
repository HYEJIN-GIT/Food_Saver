import React, { useState } from 'react'
import './Homepage.css'
import { replace, useNavigate } from 'react-router-dom'
const Homepage = () => {
  const [isOpen,setIsOpen]  = useState(false)
  const [isRefrigeratorOpen,setIsRefrigeratorOpen]  = useState(false)
  const navigate = useNavigate()
  const freezerOpen = ()=>{
    console.log("클릭")
    setIsOpen(prev => !prev)
  }

  const refrigeratorOpen = ()=>{
    console.log("클릭")
    setIsRefrigeratorOpen(prev => !prev)
  }

const goToLogin = ()=>{
  navigate( '/login', replace)
}
  return (
    <div className='home'>
      <div className='main-section'>
        <div className='fridge-box'>
          <div className='freezer' onClick={freezerOpen}>
            <div className='freezer-inside'>
            🥚 🥛 🥬
            </div>
            <div className={`freezer-door ${isOpen ? "open":""}`}>
              <div className='handle'></div>

            </div>
          </div>
          <div className='refrigerator'  onClick={refrigeratorOpen}>
             <div className='refrigerator-inside'>
                <button className="login-button"
                onClick={goToLogin}> 식재료 관리 시작하기</button>
                
             </div>
             <div className={`refrigerator-door ${isRefrigeratorOpen?"open":""}`}>
                <div className='refrigerator-handle'></div>

             </div>
          </div>
        </div>
        <div className='intro-text'>
     
        </div>
      </div>


      
    </div>
  )
}

export default Homepage
