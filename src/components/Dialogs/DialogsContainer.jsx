import React from 'react'
import {addPostDialogActionCreator, updatePostTextDialogActionCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (p) => {
//     debugger
//     let addPost = () => {
//         p.store.dispatch(addPostDialogActionCreator())
//     }
//
//     let onChange = (e) => {
//         let text = e.currentTarget.value
//         p.store.dispatch(updatePostTextDialogActionCreator(text))
//     }
//
//     return (
//         <Dialogs dialogItems={p.store.getState().dialogItems} addPost={addPost} onChange={onChange} />
//     )
// }


const mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostDialogActionCreator())
        },
        onChange: (e) => {
            let text = e.currentTarget.value
            dispatch(updatePostTextDialogActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer