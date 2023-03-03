import { NavLink } from 'react-router-dom';
import g from './Dialogs.module.css'
import Dialog from '../Dialogs/Dialog/Dialog'
import Message from '../Dialogs/Message/Message'


const Dialogs = (props) => {
    return(
        <div className={g.dialogs}>
            <div className={g.dialogsItems}>
                <Dialog name='Aslan' id='1'/>
                <Dialog name='Maria' id='2'/>
                <Dialog name='Ramila' id='3'/>

            </div>
            <div className={g.messages}>
                <Message message='hi'/>
                <Message message='hihi'/>
                <Message message='hihihi'/>
            </div>
        </div>
    );
}

export default Dialogs;