import React from 'react';
import {AddPostProfileActionCreator, updatePostTextProfileActionCreator} from "../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

/*const MyPostsContainer222 = (p) => {
    let addPost = () => {
        p.store.dispatch(AddPostProfileActionCreator())
    }

    let onChange = (e) => {
        let text = e.currentTarget.value;
        p.store.dispatch(updatePostTextProfileActionCreator(text))
    }

    return  <MyPost addPost={addPost} onChange={onChange} store={store.getState().profileItems} />
}*/
///////////////////////////////////
const mapStateToProps = (state) => {
    return {
        post: state.profileItems.post,
        textArea: state.profileItems.textArea
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(AddPostProfileActionCreator())
        },
        onChange: (e) => {
            let text = e.currentTarget.value
            dispatch(updatePostTextProfileActionCreator(text))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostsContainer