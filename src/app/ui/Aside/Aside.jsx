"use client"
import React, { useEffect, useState } from 'react'
import "./Aside.scss"
import { sendRequest } from '@/app/api/actions'
import { FaCirclePlus } from "react-icons/fa6";
import { coffeewebStorageKeys, coffeeweb_GetLocal } from '@/app/LocalStorage';
import Button from '../Button/Button';

const Aside = () => {

  const [allUsers, setAllUsers] = useState([])
  const [followRequest, setFollowRequest] = useState([])

  useEffect(() => {
    let userDetails = coffeeweb_GetLocal(coffeewebStorageKeys.userDetails);
    getAllUsers(userDetails)
    getAllFriendRequests(userDetails)
  }, [])

  const getAllUsers = async (userDetails) => {
    const res = await fetch(`/api/getalluser/${userDetails?._id}`, {
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

  const getAllFriendRequests = async (userDetails) => {
    const res = await fetch(`/api/request/${userDetails._id}`, {
      cache: "no-store"
    });
    try {
      const result = await res.json()
      console.log(result)
      setFollowRequest(result.returnLst)
    }
    catch (err) {
      console.log(err)
    }
  };

  // const followAction = async () => {
  //   const data = {
  //     user: "hello"
  //   }
  //   const res = await fetch("/api/request", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });

  //   if (res.status === 200) {
  //     const data = await res.json();
  //     // router.push(`/posts/${data.slug}`);
  //   }
  // };

  const followAction = async (ele, index) => {
    let userDetails = coffeeweb_GetLocal(coffeewebStorageKeys.userDetails);
    const data = {
      userId: userDetails._id,
      userName: userDetails.username,
      userProfilePic: userDetails.profilePic,
      thirdPersonId: ele._id,
      thirdPersonName: ele.username,
      thirdPersonProfilePic: ele.profilePic,
      status: "pending",
      followBack: false
    }
    const res = await fetch("/api/request", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      const data = await res.json();
      console.log(data)
      const updatedUser = allUsers.map((ele, ind) => {
        if (index == ind) {
          return {
            ...ele,
            requestedId: data.returnLst._id,
            requested: true
          }
        } else {
          return ele
        }
      })
      setAllUsers(updatedUser)
      // router.push(`/posts/${data.slug}`);
    }
  };
  const cancelRequest = async (ele, index) => {
    console.log(ele)
    let userDetails = coffeeweb_GetLocal(coffeewebStorageKeys.userDetails);
    const data = {
      requestedId: ele.requestedId
    }
    const res = await fetch("/api/request", {
      method: "DELETE",
      body: JSON.stringify(data),
    })
    try {
      if (res.status === 200) {
        const data = await res.json();
        const updatedUser = allUsers.map((ele, ind) => {
          if (index == ind) {
            return {
              ...ele,
              requestedId: null,
              requested: false
            }
          } else {
            return ele
          }
        })
        setAllUsers(updatedUser)
      }
    } catch {

    }

  };

  const acceptRequest = async (ele, index) => {
    console.log(ele, index)
    const postData = {
      status: "accepted",
    }
    const res = await fetch(`/api/request/${ele._id}`, {
      method: "PUT",
      body: JSON.stringify(postData),
    });
    const response = await res.json();
    try {
      const updatedUser = followRequest.map((ele, ind) => {
        if (ind === index) {
          if (ele?.followBack == true) {
            return {
              ...ele,
              status: "following"
            }
          }
        } else return ele
      })
      setFollowRequest(updatedUser)
    } catch {

    }
  }
  const followBack = async (ele, index) => {
    console.log(ele)
    let userDetails = coffeeweb_GetLocal(coffeewebStorageKeys.userDetails);
    const data = {
      userId: userDetails._id,
      userName: userDetails.username,
      userProfilePic: userDetails.profilePic,
      thirdPersonId: ele.thirdPersonId,
      thirdPersonName: ele.thirdPersonName,
      thirdPersonProfilePic: ele.thirdPersonProfilePic,
      status: "pending",
      followBack: true
    }
    const res = await fetch("/api/request", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      const data = await res.json();
      const updatedUser = followRequest.map((ele, ind) => {
        if (ind === index) {
          return {
            ...ele,
            status: "requestedBack"
          }
        } else return ele
      })
      setFollowRequest(updatedUser)
      // router.push(`/posts/${data.slug}`);
    }
  }

  return (
    <div className='aside'>
      <div className='container'>
        <div className='cards'>
          <div className='request p15 hr'>All Users</div>
          <div className='chat_list'>
            {allUsers?.map((ele, index) => {
              return (
                <div className='hr p10' key={index}>
                  <div className='chat'>
                    <div className="profile_pic_no_wrapper">
                      <img src={ele?.profilePic} />
                    </div>

                    <div className='user_name'>
                      <div className='name'>{ele.username}</div>
                      <div className='actions'>
                        <div>
                          {ele.requested ? <button className='sbutton' onClick={() => cancelRequest(ele, index)}>Cancel request</button> :
                            <button className='pbutton' onClick={() => followAction(ele, index)}>Add Friend</button>}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}

          </div>
        </div>

        <div className='cards'>
          <div className='request p15 hr'>Friend Requests</div>
          <div className='chat_list'>
            {followRequest?.map((ele, index) => {
              return (
                <div className='hr p10' key={index}>
                  <div className='chat'>
                    <div className="profile_pic_no_wrapper">
                      <img src={ele?.userProfilePic} />
                    </div>

                    <div className='user_name'>
                      <div className='name'>{ele.thirdPersonName}</div>
                      <div className='actions'>
                        {ele.status == "accepted" && <button className='pbutton' onClick={() => followBack(ele, index)}>Follow Back</button>}

                        {ele.status == "pending" &&

                          <>
                            <button className='pbutton' onClick={() => acceptRequest(ele, index)}>Accept</button>
                            <button className='sbutton'>Delete</button>
                          </>
                        }

                        {ele.status == "requestedBack" && <button className='sbutton'>Requested</button>}
                        {ele.status == "following" && <button className='sbutton'>Following</button>}

                        {/* <button className='pbutton' onClick={()=>sendRequest(ele.id)}><FaCirclePlus/></button> */}
                        {/* <form action={sendRequest}>
                          <input type="hidden" name="userId" value={(ele._id)} />
                          <input type="hidden" name="receiverId" value={(userDetails?._id)} />
                          <button>
                            <FaCirclePlus />
                          </button>
                        </form> */}
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside