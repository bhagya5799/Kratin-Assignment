import React from 'react'
import './index.css'
import { AiFillPhone, AiOutlineSearch, AiOutlineFacebook, AiOutlineMail } from 'react-icons/ai'

const Header = () => {
  return (
      <div className='header d-flex a-center j-between'>
          <p></p>
          <div className='details d-flex'>
              <p className='d-flex a-center'>CARE &nbsp;Portal</p>
              <p><AiFillPhone /> 2-999-398789-656</p>
              <span> <AiOutlineMail /> &nbsp;info@carrier.com</span>
              <span><AiOutlineSearch /></span>
              <a href='https://www.facebook.com/'><AiOutlineFacebook /></a>
          </div>
      </div>
  )
}
export default Header