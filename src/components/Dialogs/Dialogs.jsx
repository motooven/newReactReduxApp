import React from 'react';
import {NavLink} from "react-router-dom";


const Dialogs = (p) => {

    const DialogItem = () => {
        return <div> {p.dialogItems.name.map((d) => <div key={d.id}><NavLink to={'/dialogs/' + d.id}>{d.name}</NavLink></div>)} </div>
    }

    const MessageItem = () => {
        return <div>{p.dialogItems.message.map((m) => <div key={m.id}>{m.message}</div>)} </div>
    }

    return (
        <div className='dialogs'>
            <div className="name">
                <DialogItem/><br/>
                <textarea value={p.dialogItems.textArea} onChange={p.onChange}/><br/>
                <button onClick={p.addPost}>add post</button>
            </div>
            <div className="messages">
                <MessageItem />
            </div>
        </div>
    );
};

export default Dialogs;