import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({searchPost , setSearchPost,location}) => {
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
      <li className={(location.pathname=='/' || location.pathname.includes('/post/'))? 'hover':''} ><Link to='/'>Home</Link></li>
        <li className={(location.pathname == '/post')? 'hover':''}><Link  to='/post'>Post</Link></li>
        <li className={(location.pathname == '/about')? 'hover':''}><Link  to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
