import { NavLink } from 'react-router-dom';
import g from './Dialogs.module.css'
import Dialog from '../Dialogs/Dialog/Dialog'
import Message from '../Dialogs/Message/Message'


const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Aslan'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Ramila'},
    ]
    
    let messageData = [
        {id: 1, message:'hi'},
        {id: 2, message:'hihi'},
        {id: 3, message:'hihihi'},
    ]

    let dialogElement = dialogData.map( d => <Dialog name={d.name} id={d.id} />);
    let messageElement = messageData.map( m => <Message message={m.message} />)

    return(
        <div className={g.dialogs}>
            <div className={g.dialogsItems}>
                {dialogElement}
            </div>
            <div className={g.messages}>
                {messageElement}
            </div>
        </div>
    );
}

export default Dialogs;