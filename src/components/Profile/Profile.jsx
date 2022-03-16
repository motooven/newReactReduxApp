import React from 'react';
import MyPostsContainer from "./MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div className='profile'>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;