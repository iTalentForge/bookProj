import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={props => 
            !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />} 
    />
);

// DEFAULT:  component: PropTypes.func.isRequired,

UserRoute.propTypes = {
    component: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps)(UserRoute);