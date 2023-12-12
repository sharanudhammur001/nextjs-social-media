import React from 'react'

function page({params}) {
  console.log(params)

  // const getUser = async (userDetails) => {
  //   const res = await fetch(`/api/getalluser/${userDetails?._id}`, {
  //     cache: "no-store",
  //   });
  //   try {
  //     const result = await res.json()
  //     setAllUsers(result.returnLst)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // };

  return (
    <div className='users'>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        <div><h1>hello</h1></div>
        </div>
  )
}

export default page