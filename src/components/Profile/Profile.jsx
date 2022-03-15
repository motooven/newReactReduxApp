import React from 'react';
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (p) => {

    return (
        <div className='profile'>
            <ProfileInfo/>
            <MyPosts post={p.state} dispatch={p.dispatch}/>
        </div>
    );
};

export default Profile;