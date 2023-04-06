import React from 'react';
import Profile from './Profile';


class ProfileContainer extends React.Component{
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
    
}

let mapStateToProps = () => {
    return
}



export default ProfileContainer;