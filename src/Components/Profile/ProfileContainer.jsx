import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReduser';
import { connect } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';


class ProfileContainer extends React.Component{
    

    componentDidMount() {
        let profileId = this.props.router.params.profileId
        if (!profileId) {
            profileId = 2
        }
        this.props.getUserProfile(profileId)
    }

    render() {
        if (this.props.isAuth === false) return <Navigate to='/login'/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
    
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);