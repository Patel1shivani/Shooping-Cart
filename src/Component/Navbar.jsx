import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const item=useSelector((state)=>state.cart)
  return (
    <div >
      <ul className='header'>
        {/* <div className='item1'> */}
        <li>
            <Link className='item2' to={'/'}>Home</Link>
            </li>
            <li className='item3'>
            <Link to={'/cart'}>Cart-{item.length}</Link>
            </li>
            </ul>
        </div>
  )
}

export default Navbar