import React from 'react';
import MyPostsContainer from "./MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
    return (
        <div className='profile'>
            <ProfileInfo/>
            <MyPostsContainer  />
        </div>
    );
};

export default Profile;