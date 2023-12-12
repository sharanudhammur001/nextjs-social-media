"use client"
import React, { useEffect, useState } from 'react'
import "./Sidebar.scss"
import { coffeewebStorageKeys, coffeeweb_GetLocal } from '@/app/LocalStorage';

function sidebar() {
  // let userDetails = coffeeweb_GetLocal(coffeewebStorageKeys.userDetails);
  // let userDetails = null
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    setUserDetails(coffeeweb_GetLocal(coffeewebStorageKeys.userDetails));
  }, [])
  return (
    <div className='sidebar'>
      <div className='container'>
        <div className='profile_sec cards p10'>
          <div className='profile_card hr'>
            <img src={userDetails?.profilePic} alt="" />
            <div className='username p10'>{userDetails?.username}</div>
          </div>
          <div className='hr p10'>310 Posts</div>
          <div className='p10'>sidebar</div>
        </div>
        <div className='content cards p10'>
          <div>sidebar</div>
        </div>
      </div>
    </div>
  )
}

export default sidebar