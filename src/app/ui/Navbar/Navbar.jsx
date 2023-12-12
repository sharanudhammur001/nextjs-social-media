"use client"
import React from 'react'
import "./Navbar.scss"
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import Search from './Search/Search';
import { coffeewebStorageKeys, coffeeweb_GetLocal } from '@/app/LocalStorage';

function Navbar() {
  // let userDetails = coffeeweb_GetLocal(coffeewebStorageKeys.userDetails);

  return (
    <div className='navbar cards'>
      <div className='container'>
        <div className='logo'>
          <FaFacebookSquare style={{width:"30px",height:"30px",color:"#3b5998"}} />FaceBook
        </div>
        <div><Search/></div>
        <div className='menus'>
          <div><IoMdContacts style={{width:"25px",height:"30px",color:"#3b5998"}} /></div>
          <div><FaFacebookMessenger style={{width:"25px",height:"30px",color:"#3b5998"}} /></div>
          <div><FaBell style={{width:"25px",height:"30px",color:"#3b5998"}} /></div>
          <div><BsQuestionCircleFill style={{width:"25px",height:"30px",color:"#3b5998"}} /></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar