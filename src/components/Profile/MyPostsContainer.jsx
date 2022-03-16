import React from 'react';
import Posts from "./Posts";
import {AddPostProfileActionCreator, updatePostTextProfileActionCreator} from "../../Redux/profileReducer";
import MyPost from "./MyPost";
import store from "../../Redux/store";


const MyPostsContainer = (p) => {
    let addPost = () => {
        p.store.dispatch(AddPostProfileActionCreator())
    }

    let onChange = (e) => {
        let text = e.currentTarget.value;
        p.store.dispatch(updatePostTextProfileActionCreator(text))
    }

    return  <MyPost addPost={addPost} onChange={onChange} store={store.getState().profileItems} />
}

export default MyPostsContainer;