import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { AddMessageActionCreater, UpdateNewMessageActionCreater } from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';



let mapStateToPops = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        newMessageText: state.messagesPage.newMessageText,
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


export default compose(
    connect(mapStateToPops, mapDisparchToProps),
    withAuthRedirect,  
)(Dialogs);