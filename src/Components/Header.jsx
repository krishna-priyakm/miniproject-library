import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

   const navigate=useNavigate({})
   const handlelogout=()=>{
    sessionStorage.clear()
    navigate('/')
   }
  return (
    <div style={{height:'54px',backgroundColor:'lightblue'}} className='text-white d-flex justify-content-between pt-1'>
      
        <h3 style={{color:'green',paddingLeft:'10px'}} >  
            <i className="fa-brands fa-jedi-order fa-fade fa-xl" style={{color: "#df7f11"}}></i>
            Central Perk Library
            </h3>
           <div >
           <button className='btn btn-rounded btn-outline-dark' onClick={handlelogout}>Logout</button>
           </div>
    </div>
  )
}

export default Header