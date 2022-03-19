import React from 'react';
import Posts from "./Posts";


const MyPost = (props) => {

    return (
        <div>
            <div>My posts</div>
            <textarea value={props.textArea} onChange={props.onChange}/><br/>
            <button onClick={props.addPost}>add post</button>
            <Posts post={props.post} />
        </div>
    );
};

export default MyPost;
