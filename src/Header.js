import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';


const Header = ({windoSize}) => {
  return (
    <header className='Header'>
      <h1>React Js Blog</h1>
      {windoSize.width > 998 ? <FaLaptop /> : windoSize.width > 418  ? <FaTabletAlt /> : <FaMobileAlt /> }
    </header>
  )
}

export default Header
