import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <div className="logo_box">
            <h1 id='logo_text'>G.cars</h1>
        </div>
        <div className="link_list">
            <Link id='nav_link' to={'/'}>MainPage</Link>
            <Link id='nav_link' to={'/create'}>Add Car</Link>
            <Link id='nav_link' to={'see_more'}>More</Link>
            <Link id='nav_link' to={'/my_card'}><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </nav>
  )
}

export default Header