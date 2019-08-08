import React from 'react';
import Input from '../../../components/Input';
import { withRouter } from 'react-router-dom';
import Button from 'components/Button';
import EmployeeHierarchy from '../EmployeeHierarchy';

class UserTable extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTable = () => {
        return this.props.datas.map(data => {
            return (
                <tr key={data._id}>
                    <td className="name">{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                    <td>{data.department}</td>
                    <td>
                        <button
                            className="view-details-button"
                            onClick={e => {
                                this.handleClick(e, data);
                            }}
                        >
                            View Details
                        </button>
                    </td>
                </tr>
            );
        });
    };

    handleClick(e,data){
        this.props.history.push(`/admin/viewuser/${data._id}`,data);        
    }

    toEmployeeHierarchy(e){
        e.preventDefault();
        this.props.history.push(`/admin/ehs`);
    }

    render() {
        return (
            <div className="user-table">
                <h3>Employee List</h3>
                <div className="search">
                    <div><Input type="text" name="search" label="Search" /></div>
                    <button className="ehs" onClick={(e)=>{this.toEmployeeHierarchy(e)}}>Employee Hierarchy</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Department</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{this.renderTable()}</tbody>
                </table>
                
            </div>
        );
    }
}

export default withRouter(UserTable);
