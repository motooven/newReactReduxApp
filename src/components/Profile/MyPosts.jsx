import React from 'react';
import Posts from "./Posts";


const MyPosts = (p) => {
    let ref_Element = React.createRef()

    let addPost = () => {
        p.dispatch({type: "ADD-POST-PROFILE"})
    }

    let onChange = () => {
        let text = ref_Element.current.value;
        p.dispatch({type: "UPDATE-POST-TEXT-PROFILE", text})
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