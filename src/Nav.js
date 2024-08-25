import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({searchPost , setSearchPost}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search post</label>
        <input 
        type="text" 
        className=''
        placeholder='Search post'
        value={searchPost}
        onChange={(e) => setSearchPost(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/post'>Post</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
