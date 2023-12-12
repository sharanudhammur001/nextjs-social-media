"use client"

import React, { useEffect, useState } from 'react'
import "./username.scss"

// const getUsers = async (searchForUser) => {
//   console.log(searchForUser)
//   const res = await fetch(`/api/user/${searchForUser}`, {
//     cache: "no-store",
//   });
//   try {
//     // const result = await res.json()
//     // setAllUsers(result.returnLst)
//     console.log(res)
//   }
//   catch (err) {
//     console.log(err)
//   }
// };

const username = ({ params }) => {
  const { username } = params
  const searchForUser = username.split("usersname%3D")[1];
  const [users, setAllUsers] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const res = await fetch(`/api/user/${searchForUser}`, {
      cache: "no-store",
    });
    try {
      const result = await res.json()
      setAllUsers(result.returnLst)
    }
    catch (err) {
      console.log(err)
    }
  };

  return (
    <div className='username'>
      <div className='container'>
        <div className='cards p15'>
          {/* <div></div> */}
          <div>
            {users?.map((ele, index) => {
              return (
                <div key={index} className='user_detail'>
                  <div className='p10'>
                    <img src={ele.profilePic} alt="" />
                  </div>
                  <div className='username p10'>{ele.username}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default username