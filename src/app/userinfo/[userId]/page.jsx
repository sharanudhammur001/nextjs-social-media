import React from 'react'
import Navbar from '../../ui/Navbar/Navbar'
import Sidebar from '../[userId]/components/UserInfoSidebar/UserInfoSidebar'
import Feeds from '../../ui/Feeds/Feeds'
import "./userinfo.scss"
import ProfileCard from '../[userId]/components/ProfileCard/ProfileCard'
function page({params}) {
    const {userId } = params
    return (
        <div>
            <Navbar />
            <div className='userinfoLayout'>
                <ProfileCard />
                <div className='feedsandabout'>
                    <Sidebar />
                    <Feeds />
                </div>
            </div>
        </div>
    )
}

export default page