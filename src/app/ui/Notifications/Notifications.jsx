import React from 'react'
import "./Notifications.scss"

const users = [
    {
      name: "sharanu dhammur",
      profile: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
      statusbar: true,
    },
    {
      name: "Shrinivas karaganchi",
      profile: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
      statusbar: false
    },
    {
      name: "Selena gomez",
      profile: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
      statusbar: false,
    },
  ]

function Notifications() {
  return (
    <div className='notifications'>
    <div className='container'>
      <div className='cards'>
        <div className='request p15 hr'>Notifications</div>
        <div className='chat_list'>
          {users.map((ele, index) => {
            return (
              <div className='hr p10' key={index}>
                <div className='chat'>
                  <div className="profile_pic_no_wrapper">
                    <img src={ele.profile} />
                  </div>

                  <div className='user_name'>
                    <div className='name'>{ele.name} <span>liked your message</span></div>
                    {/* <div className='actions'>
                      <button className='pbutton'>Accept</button>
                      <button className='sbutton'>Delete</button>
                    </div> */}
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

export default Notifications