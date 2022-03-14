import React from 'react';
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (p) => {

    return (
        <div className='profile'>
            <ProfileInfo/>
            <MyPosts post={p.state} addPost={p.addPost} updatePostText={p.updatePostText}/>
        </div>
    );
};

export default Profile;