import React from 'react';
import Posts from "./Posts";
import {AddPostProfileActionCreator, updatePostTextProfileActionCreator} from "../../Redux/profileReducer";


const MyPosts = (p) => {
    let ref_Element = React.createRef()

    let addPost = () => {
        p.dispatch(AddPostProfileActionCreator())
    }

    let onChange = () => {
        let text = ref_Element.current.value;
        p.dispatch(updatePostTextProfileActionCreator(text))
    }

    return (
        <div>
            <div>My posts</div>
            <textarea ref={ref_Element} value={p.post.profileItems.textArea} onChange={onChange}/><br/>
            <button onClick={addPost}>add post</button>
            <Posts post={p.post} />
        </div>
    );
};

export default MyPosts;