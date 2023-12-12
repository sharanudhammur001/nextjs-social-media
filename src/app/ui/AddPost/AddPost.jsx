import React from 'react'
import "./AddPost.scss"
import Image from 'next/image'
function Post() {
    return (
        <div className='addpost'>
            <div className='container cards p10'>
                <div className='section_1'>
                    {/* <div><Image width={100} height={50} src="https://www.waldenu.edu/media/5504/seo-2332-bs-glad-dark-skinned-woman-with-a-393146831-1200x675"/></div> */}
                    <div><img src="https://img.freepik.com/free-photo/cute-clever-best-student-college-girl-african-american-touch-glasses-nose-smiling-broadly-work-part-time-tutor-children-english-lessons-smiling-friendly-standing-yellow-background-sweater-headband_1258-82012.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais"/></div>
                    <div className='start_post'>Add a post</div>
                </div>
                {/* <div className='section_2'>
                    <div>media</div>
                    <div>event</div>
                    <div>Article</div>
                </div> */}
            </div>
        </div>
    )
}

export default Post