import g from './Dialogs.module.css'
import Dialog from '../Dialogs/Dialog/Dialog'
import Message from '../Dialogs/Message/Message'
import React from 'react';
import { Navigate } from 'react-router-dom';


const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage()
        
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.UpdateNewMessageActionCreater(text)
    }

    let dialogElement = props.dialogData.map( d => <Dialog name={d.name} key={d.id} id={d.id} />);
    let messageElement = props.messageData.map( m => <Message message={m.message} key={m.id} />)
    
    if (props.isAuth === false) return <Navigate to={'/login'}/>

    return(
        <div className={g.dialogs}>
            <div className={g.dialogsItems}>
                {dialogElement}
            </div>
            <div className={g.messages}>
                {messageElement}
            <input onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></input>
            <button onClick={addMessage}>Отправить сообщение</button>
            </div>
        </div>
    );
}

export default Dialogs;