import React, { Component } from 'react';
import './style.scss';
import img from 'assets/img/dummy.jpeg';
import {
    withRouter,
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom';
import AuthHelperMethods from 'utils/auth';
class Navigation extends Component {
    state = {
        redirect: false
    };
    setRedirect = () => {
        this.setState({
            redirect: true
        });
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return (
                <Redirect
                    to={{ pathname: '/', state: { from: this.props.location } }}
                />
            );
        }
    };
    handleClick() {
        const Auth = new AuthHelperMethods();
        Auth.logout();
        this.setRedirect();
        this.props.history.push('/');
        window.location.reload();
    }
    render() {
        return (
            <div className="navigations">
                {this.renderRedirect()}

                <nav className="navbar navbar-expand-lg navbar-custom">
                    <div className="custom-nav">
                        <div className="navbar-logo navbar-brand">Company</div>
                        <div className="user-functions">
                            <span className="icons icon-bell" />
                            <div className="username">Admin</div>
                            <img className="user-image" src={img} alt="x" />
                            <button onClick={e => this.handleClick(e)}>
                                logout
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Navigation);
