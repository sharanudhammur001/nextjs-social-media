import React from 'react'
import "./ProfileCard.scss"

function ProfileCard() {
  return (
    <div className='userinfo_profilecard'>
      <div className='container'>
        <div className='cards p10 wrapper'>
          <div className='coverPic'>
            <img src="https://images.pexels.com/photos/1250346/pexels-photo-1250346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='footer'>
            <div className='imagaWrapper'><img src="https://media.istockphoto.com/id/1203044189/photo/happy-african-businessman-worker-looking-at-smart-watch-at-work.webp?b=1&s=170667a&w=0&k=20&c=iIMuQWgcpounP34l5vqkWnAnOPZnMY-4XdaEupJGvag=" alt="" /></div>
            <div className='userdetail'>
              <div className='username'>sharanu</div>
              <div className='followers'>237k Followers &bull; 1 Following</div>

            </div>
            <div className="actions">
              <button className='pbutton'>Accept</button>
              <button className='sbutton'>Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard