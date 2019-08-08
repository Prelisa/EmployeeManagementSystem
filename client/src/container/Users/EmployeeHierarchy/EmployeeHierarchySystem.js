import React from 'react';
import img from 'assets/img/dummy.jpeg';
import hrimg from 'assets/img/Employee Heirarchy System - 3.png'
import empimg from 'assets/img/Employee Heirarchy System - 6.png'

const EmployeeHierarchySystem = ( props ) => {
    const { adminemployee, hremployee, employee, toListUser } = props;
   
    const adminHierarchy = () => {
        return adminemployee.map( emp => {
            return(
                <div className="card">
                    <div className="admin-image">
                        <img className="adminimg" src={empimg} alt="no image availale"></img>
                    </div>
                    <div className="card-body">
                        <div className="name">{emp.name}</div>
                        <div className="info">
                            <div className="detail">
                                <i className="icons icon-user"></i>
                                <div className="detail-text">{emp.role}</div>
                            </div>
                            <div className="detail">
                                <i className="icons icon-phone"></i>
                                <div className="detail-text">{emp.contact}</div>
                            </div>
                            <div className="detail">
                                <i className="icons icon-email"></i>
                                <div className="detail-text">{emp.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        
    }

    const hrHierarchy = () => {
        return hremployee.map( hremp => {
            return(
                <div className="card">
                    <div className="hr-image">
                        <img className="hrimg" src={hrimg} alt="no image availale"></img>
                    </div>
                    <div className="card-body">
                        <div className="name">{hremp.name}</div>
                        <div className="info">
                            <div className="detail">
                                <i className="icons icon-user"></i>
                                <div className="detail-text">Human Resources</div>
                            </div>
                            <div className="detail">
                                <i className="icons icon-phone"></i>
                                <div className="detail-text">{hremp.contact}</div>
                            </div>
                            <div className="detail">
                                <i className="icons icon-email"></i>
                                <div className="detail-text">{hremp.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const empHierarchy = () => {
        return employee.map( emp => {
            return(
                <div className="card">
                    <div className="emp-image">
                        <img className="userimg" src={empimg} alt="no image availale"></img>
                    </div>
                    <div className="card-body">
                        <div className="name">{emp.name}</div>
                        <div className="info">
                            <div className="detail">
                                <i className="icons icon-user"></i>
                                <div className="detail-text">{emp.role}</div>
                            </div>
                            <div className="detail">
                                <i className="icons icon-phone"></i>
                                <div className="detail-text">{emp.contact}</div>
                            </div>
                            <div className="detail">
                                <i className="icons icon-email"></i>
                                <div className="detail-text">{emp.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        
    }

    return (
        <div className="ehs">
           
            <h3>Employee Hierarchy</h3>
            <div className="back"><button className="back-to-listuser" onClick={toListUser}>Employee Hierarchy</button></div>
           
            <div className="admin-hierarchy">
                <h4>Admin</h4>
                <div className="cards">{adminHierarchy()}</div>
                
            </div>
            <div className="hr-hierarchy">
                <h4>HR</h4>
                <div className="cards">{hrHierarchy()}</div>
                
            </div>
            <div className="emp-hierarchy">
                <h4>Employee</h4>
                <div className="cards">{empHierarchy()}</div>
            </div>
        </div>
    )
}

export default EmployeeHierarchySystem;
