import React from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from 'components/Button';
import ViewDepart from '../ViewDepart';

class DeptTable extends React.Component {
    constructor(props) {
        super(props)

    }


    renderTable = () => {
        return this.props.datas.map(data=>{

            return(
                <tr key={data._id}>
                    <td className="name">{data.name}</td>
                    <td>{data.depthead}</td>
                    <td><Button 
                            className="primary" 
                            handleClick={(e)=> {this.handleClick(e, data)}}
                            buttonName="View Details"/>
                    </td>
                </tr>
                
            )
        })
        
    }

    handleClick(e,data){
        e.preventDefault();
        this.setState({
            data: data
        })
        this.props.history.push(`/admin/viewdept/${data._id}`,data);
      
    }


    render() {
        return (
            <div className="dept-table">
                <h3>Department List</h3>
                <div className="search"><Input type="text" name="search" label="Search" /></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Depatment Head</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>

            </div>
        )
    }

}

export default withRouter(DeptTable);
