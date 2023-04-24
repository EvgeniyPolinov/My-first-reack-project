import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReduser';
import { connect } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component{
    

    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = 28484
        }
        this.props.getUserProfile(profileId)
        this.props.getStatus(profileId)
    }

    render() {
        if (this.props.isAuth === false) return <Navigate to='/login'/>
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
    
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);