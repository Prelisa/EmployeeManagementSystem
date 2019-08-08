import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/basic.scss';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/icons/style.css';
import './mainstyle.scss';

import CreateUsers from 'container/Users/CreateUsers';
import SideBar from './components/Sidebar';
import Navigation from './components/Navigation';
import CreateDepart from './container/Department/CreateDepart';
import ListUsers from './container/Users/ListUsers';
import ViewUser from 'container/Users/ViewUser';
import EditUser from 'container/Users/EditUser';
import ListDepart from 'container/Department/ListDepart';
import ViewDepart from 'container/Department/ViewDepart';
import EditDepart from 'container/Department/EditDepart';
import EmployeeHierarchy from 'container/Users/EmployeeHierarchy';
import Document from 'container/Document/index.jsx';
import ViewDocument from 'container/Document/ViewDocument.jsx';

export default function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <div className="content d-flex flex-row">
                    <SideBar />
                    <div className="inner-content">
                        <div className="bg-white position-absolute my-3 mx-5 col-11 shadow">
                            <Switch>
                                <Route
                                    path="/admin"
                                    exact
                                    component={ListUsers}
                                />
                                <Route
                                    path="/admin/createusers"
                                    exact
                                    component={CreateUsers}
                                />
                                <Route
                                    path="/admin/createdepart"
                                    exact
                                    component={CreateDepart}
                                />
                                <Route
                                    path="/admin/viewuser/:id"
                                    exact
                                    component={ViewUser}
                                />
                                <Route
                                    path="/admin/edituser"
                                    exact
                                    component={EditUser}
                                />
                                <Route
                                    path="/admin/ehs"
                                    exact
                                    component={EmployeeHierarchy}
                                />
                                <Route
                                    path="/admin/listdept"
                                    exact
                                    component={ListDepart}
                                />
                                <Route
                                    path="/admin/viewdept/:id"
                                    exact
                                    component={ViewDepart}
                                />
                                <Route
                                    path="/admin/editdept"
                                    exact
                                    component={EditDepart}
                                />
                                <Route
                                    path="/admin/document"
                                    exact
                                    component={Document}
                                />
                                <Route
                                    path="/admin/view-document/:value?"
                                    component={ViewDocument}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}
