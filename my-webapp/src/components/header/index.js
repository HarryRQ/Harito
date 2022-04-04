import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'
import { FiAlignJustify } from "react-icons/fi";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Header'>
        <div className='logo'>Harry's Portfolio</div>
        <div className='menu'>
            <div className='web-menu'>
                <Web/>
            </div>
            <div className='mobile-menu'>
                <div onClick={() => setIsOpen(!isOpen)}> 
                <FiAlignJustify className='menu-icon'/>
                </div>
                {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
            </div>
        </div>
    </div>
  )
}

export default Header


