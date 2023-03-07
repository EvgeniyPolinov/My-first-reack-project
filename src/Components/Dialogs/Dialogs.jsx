import { NavLink } from 'react-router-dom';
import g from './Dialogs.module.css'
import Dialog from '../Dialogs/Dialog/Dialog'
import Message from '../Dialogs/Message/Message'
import React from 'react';


const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    let dialogElement = props.state.dialogData.map( d => <Dialog name={d.name} id={d.id} />);
    let messageElement = props.state.messageData.map( m => <Message message={m.message} />)

    return(
        <div className={g.dialogs}>
            <div className={g.dialogsItems}>
                {dialogElement}
            </div>
            <div className={g.messages}>
                {messageElement}
            <input ref={newMessageElement}></input>
            <button onClick={ addMessage }>Отправить сообщение</button>
            </div>
        </div>
    );
}

export default Dialogs;