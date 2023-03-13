import React from 'react';
import { connect } from 'react-redux';
import { AddMessageActionCreater, UpdateNewMessageActionCreater } from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';



let mapStateToPops = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        newMessageText: state.messagesPage.newMessageText
    }
}
let mapDisparchToProps = (dispatch) => {
    return {
        UpdateNewMessageActionCreater: (body) => {
            dispatch(UpdateNewMessageActionCreater(body))
        },
        addMessage: () => {
            dispatch(AddMessageActionCreater())
        },
    }   
}


const DialogsContainer = connect(mapStateToPops, mapDisparchToProps) (Dialogs);

export default DialogsContainer;