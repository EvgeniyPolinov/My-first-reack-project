let initiallState = {
    messageData: [
        {id: 1, message:'hi'},
        {id: 2, message:'hihi'},
        {id: 3, message:'hihihi'},
    ],
    newMessageText: '',
    dialogData: [
        {id: 1, name: 'Aslan'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Ramila'},
     ],
}


const dialogsReducer = (state = initiallState, action) => {
    switch(action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';  
            return state        
        case 'CHANGE-NEW-MESSAGE-TEXT' :
            state.newMessageText = action.newText;
            return state  
        default: return state
        }

}


export const AddMessageActionCreater = () => ({
    type: 'ADD-MESSAGE',
})
export const UpdateNewMessageActionCreater = (text) => ({
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    newText: text,
})

export default dialogsReducer