import React from "react";
import { connect } from "react-redux";
import Header from './Header'
import { getUserData } from "../../redux/authReduser";




class HeaderContainer extends React.Component{

    
    componentDidMount() {

        this.props.getUserData()
    }

    render() {
        return <Header {...this.props}/>
        
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect (mapStateToProps, {getUserData}) (HeaderContainer);