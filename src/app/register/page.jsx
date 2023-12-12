"use client"
import React, { useState } from 'react'
import { register } from '../api/data'
import "./register.scss"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function page() {

  const router = useRouter();

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    profilePic: "https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name)
    console.log(value)
    setUserDetails({ ...userDetails, [name]: value })
  }
  const handleSubmit = async (e) => {
    const user = await register(userDetails)
    localStorage.setItem('user', JSON.stringify(user));
    router.push("/dashboard")
  }
  return (
    <div className='register'>
      <div className='container'>
        <div className='form'>
          <div className='header'>Register</div>
          <div className='body'>
            <div>
              <label htmlFor="">username</label>
              <input type="text" name='username' placeholder="username" onChange={handleChange} value={userDetails.username} required />
            </div>
            <div>
              <label htmlFor="">password</label>
              <input type="password" name='password' placeholder="password" onChange={handleChange} value={userDetails.password} required />
            </div>
            <div>
              {/* <input type="hidden" name='profilePic' onChange={handleChange} value={userDetails.profilePic} /> */}
              <button onClick={handleSubmit}>Submit</button>
            </div>

          </div>
          <div className='footer'>Alredy have an account? <Link href='/login'>Login</Link></div>
        </div>
      </div>
    </div>
  )
}

export default page