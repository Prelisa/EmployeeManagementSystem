import React from 'react';
import './sidebar.scss';
import { Link, withRouter, match } from 'react-router-dom';
import decoder from 'jwt-decode';

export class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconState1: true,
            iconState2: true,
            iconState3: true,
            icon1: 'icon icon-triangle-down',
            icon2: 'icon icon-triangle-down',
            icon3: 'icon icon-triangle-down'
        };
    }
    toggleIcon(val) {
        switch (val) {
            case 1:
                this.state.iconState1
                    ? this.setState({
                          iconState1: false,
                          icon1: 'icon icon-triangle-up'
                      })
                    : this.setState({
                          iconState1: true,
                          icon1: 'icon icon-triangle-down'
                      });
                break;
            case 2:
                this.state.iconState2
                    ? this.setState({
                          iconState2: false,
                          icon2: 'icon icon-triangle-up'
                      })
                    : this.setState({
                          iconState2: true,
                          icon2: 'icon icon-triangle-down'
                      });
                break;
            case 3:
                this.state.iconState3
                    ? this.setState({
                          iconState3: false,
                          icon3: 'icon icon-triangle-up'
                      })
                    : this.setState({
                          iconState3: true,
                          icon3: 'icon icon-triangle-down'
                      });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="sidebar">
                <div className="home-link d-flex justify-flex-start">
                    <i className="icon icon-home" />
                    <Link to="/admin">
                        <div className="home">Home</div>
                    </Link>
                </div>

                <div>
                    <div
                        className="dropdown-link"
                        data-toggle="collapse"
                        onClick={e => this.toggleIcon(1)}
                        data-target="#userOpen"
                        role="button"
                        aria-expanded="true"
                        aria-controls="userOpen"
                    >
                        <i className="icon icon-user" />
                        <p className="top-link department">Users</p>
                        <i className={this.state.icon1} />
                    </div>
                    <div id="userOpen" className="dropdown-links collapse">
                        <div className="outer-link">
                            <Link to="/admin/createusers">
                                <div className="link">Create Users</div>
                            </Link>
                        </div>
                        <div className="outer-link">
                            <Link to="/admin">
                                <div className="link">List Users</div>
                            </Link>
                        </div>
                        <div className="outer-link">
                            <Link to="/admin/ehs">
                                <div className="link">Employee Hierachy</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className="dropdown-link"
                        data-toggle="collapse"
                        onClick={e => this.toggleIcon(2)}
                        data-target="#deptOpen"
                        role="button"
                        aria-expanded="true"
                        aria-controls="deptOpen"
                    >
                        <i className="icon icon-menu-bar" />
                        <p className="top-link department">Department</p>
                        <i className={this.state.icon2} />
                    </div>
                    <div id="deptOpen" className="dropdown-links collapse">
                        <div className="outer-link">
                            <Link to="/admin/createdepart">
                                <div className="link">Create Department</div>
                            </Link>
                        </div>
                        <div className="outer-link">
                            <Link to="/admin/listdept">
                                <div className="link">List Department</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="dropdown-link"
                        data-toggle="collapse"
                        onClick={e => this.toggleIcon(3)}
                        data-target="#docsOpen"
                        role="button"
                        aria-expanded="true"
                        aria-controls="docsOpen"
                    >
                        <i className="icon icon-document" />
                        <p className="top-link documents">Documents</p>
                        <i className={this.state.icon3} />
                    </div>
                    <div
                        id="docsOpen"
                        className="dropdown-links collapse"
                        aria-labelledby="headingOne"
                    >
                        <div className="outer-link">
                            <Link to="/admin/document">
                                <div className="link">Create Documents</div>
                            </Link>
                        </div>
                        <div className="outer-link">
                            <Link to="/admin/view-document">
                                <div className="link">View Documents</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
