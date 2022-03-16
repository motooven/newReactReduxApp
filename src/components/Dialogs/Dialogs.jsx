import React from 'react'
import {NavLink} from "react-router-dom"
import {addPostDialogActionCreator, updatePostTextDialogActionCreator} from "../../Redux/dialogReducer";


const Dialogs = (p) => {

    let refElement = React.createRef()

    const DialogItem = () => {
        return <div> {p.state.dialogItems.name.map((d) => <div key={d.id}><NavLink to={'/dialogs/' + d.id}>{d.name}</NavLink></div>)} </div> }

    const MessageItem = () => {
        return <div>{p.state.dialogItems.message.map((m) => <div key={m.id}>{m.message}</div>)} </div> }

    let addPost = () => {
        p.dispatch(addPostDialogActionCreator())
    }

    let onChange = (event) => {
        //let text = refElement.current.value;
        let text = event.target.value
        p.dispatch(updatePostTextDialogActionCreator(text))
    }

    return (
        <div className='dialogs'>
            <div className="name">
                <DialogItem/>
                <br/>
                <textarea
                    ref={refElement}
                    value={p.state.dialogItems.textArea}
                    onChange={onChange}
                />
                <br/>
                <button onClick={addPost}>add post</button>
            </div>
            <div className="messages">
                <MessageItem />
            </div>

        </div>
    )
}

export default Dialogs;