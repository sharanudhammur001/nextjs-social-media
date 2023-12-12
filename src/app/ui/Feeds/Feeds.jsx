import React from 'react'
import "./Feeds.scss"
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
const feeds = [
  {
    username: "Selena",
    userProfile: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
    post: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
    followers: 100,
    time: "Just Now",
    desc: "Enjoy every moment of the life",
    likeCount: 389
  },
  {
    username: "Selena",
    userProfile: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
    post: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
    followers: 100,
    time: "Just Now",
    desc: "Good Morning",
    likeCount: 389
  },
  {
    username: "Selena",
    userProfile: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
    post: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
    followers: 100,
    time: "Just Now",
    desc: "Have a nice day",
    likeCount: 389
  },
  {
    username: "Selena",
    userProfile: "https://cdn.britannica.com/03/234203-050-C3D47B4B/Shih-tzu-dog.jpg",
    post: "https://cdn.britannica.com/03/234203-050-C3D47B4B/Shih-tzu-dog.jpg",
    followers: 100,
    time: "Just Now",
    desc: "",
    likeCount: 389
  },
  {
    username: "Selena",
    userProfile: "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    post: "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    followers: 100,
    time: "Just Now",
    desc: "",
    likeCount: 389
  },
  {
    username: "Selena",
    userProfile: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    post: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    followers: 100,
    time: "Just Now",
    desc: "",
    likeCount: 389
  },
  {
    username: "Selena",
    userProfile: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    post: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    followers: 100,
    time: "Just Now",
    desc: "",
    likeCount: 389
  },
  {
    username: "Selena",
    userProfile: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
    post: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    followers: 100,
    time: "Just Now",
    desc: "",
    likeCount: 389
  },
]
function Feeds() {
  return (
    <div className='feeds'>
      <div className='container'>
        {feeds.map((ele,index) => {
          return (
            <div className='cards p0' key={index}>
              <div className='header p10'>
                <img className='image' src={ele.userProfile} alt="" />
                <div className='info'>
                  <div className='username'>{ele.username}</div>
                  <div className='time'>{ele.time}</div>
                </div>
              </div>
              {ele.desc && <div className='desc'>{ele.desc}</div>}
              <div className='post'><img src={ele.post} alt="" /></div>
              <div className='footer hr p10'>
                <div>{ele.likeCount} Likes</div>
                <div>
                  <div>24 Comments</div>
                  <div>10 Shares</div>
                </div>

              </div>
              <div className='icon_footer p5'>
                <div><AiOutlineLike style={{ width: "20px", height: "20px" }} /> Like</div>
                <div><FaRegComment style={{ width: "20px", height: "20px" }} />Comments</div>
                <div><PiShareFat style={{ width: "20px", height: "20px" }} />Shares</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Feeds