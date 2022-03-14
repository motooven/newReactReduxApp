import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, {addPost, addPostDialog, subscribable, updatePostText, updatePostTextDialog} from "./state";


export let rerenderApp = () => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updatePostText={updatePostText}
            addPostDialog={addPostDialog}
            updatePostTextDialog={updatePostTextDialog}
        />,
        document.getElementById('root')
    );
}

rerenderApp(state)

subscribable(rerenderApp)
