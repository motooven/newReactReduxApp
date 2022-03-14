import React from 'react'
import {NavLink} from "react-router-dom"


const Dialogs = (p) => {

    let refElement = React.createRef()

    const DialogItem = () => {
        return <div> {p.state.dialogItems.name.map((d) => <div key={d.id}><NavLink to={'/dialogs/' + d.id}>{d.name}</NavLink></div>)} </div> }

    const MessageItem = () => {
        return <div>{p.state.dialogItems.message.map((m) => <div key={m.id}>{m.message}</div>)} </div> }

    let addPost = () => {
        p.addPostDialog()
    }

    let onChange = () => {
        let text = refElement.current.value;
        p.updatePostTextDialog(text)
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