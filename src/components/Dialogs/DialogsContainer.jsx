import React from 'react'
import {addPostDialogActionCreator, updatePostTextDialogActionCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (p) => {
    let addPost = () => {
        p.store.dispatch(addPostDialogActionCreator())
    }

    let onChange = (e) => {
        let text = e.currentTarget.value
        p.store.dispatch(updatePostTextDialogActionCreator(text))
    }

    return (
        <Dialogs dialogItems={p.store.getState().dialogItems} addPost={addPost} onChange={onChange} />
    )
}

export default DialogsContainer;