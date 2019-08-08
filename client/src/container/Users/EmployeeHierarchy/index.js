import React, { Component } from 'react';
import request from 'request';
import {withRouter} from 'react-router-dom';
import EmployeeHierarchySystem from './EmployeeHierarchySystem';
import './style.scss';

export class EmployeeHierarchy extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            _id:"",
            name:"",
            email:"",
            password:"",
            age:"",
            dob:"",
            contact:"",
            address:"",
            adminemployee:[],
            hremployee:[],
            employee:[],
            deleted:"",
        }
    }
    

    componentDidMount(){
        var myJSONObject = {
            "_id":this.state._id,
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password,   
            "age":this.state.age,
            "dob": this.state.dob,
            "contact": this.state.contact,
            "address": this.state.address,
            "deleted": this.state.deleted,   
                 
        };

        request({
            url: "http://localhost:4000/getdata",
            method: "GET",
            json: true,   // <--Very important!!!
            body: myJSONObject
        }, function (error, response, body){
            
            const alldata=[];
            response.body.data.map(data => {
                const obj =[
                    {
                        _id:data._id,
                        name : data.name,
                        email: data.email,
                        role : data.role,
                        department : data.department,
                        age:data.age,
                        dob: data.dob,
                        contact: data.contact,
                        address: data.address,
                        password: data.password,
                        deleted: data.deleted
                    }
                ]
                
                if(data.deleted != true){
                    Array.prototype.push.apply(alldata, obj)   
                }                
            }) 
            
            this.seperateEmployee(alldata);
        }.bind(this)); 
    }

    seperateEmployee(alldata){        
        const hr=[];
        const emp=[];
        const admin=[];
        alldata.map( data => {
            if (data.role == "HR"){
                Array.prototype.push.apply(hr, [data])               
            }

            else if (data.role == "Employee"){
                Array.prototype.push.apply(emp, [data])
            }

            else if (data.role == "admin"){
                Array.prototype.push.apply(admin, [data])
            }
        })

        this.setState({
            employee: emp,
            hremployee: hr,
            adminemployee:admin
        })
        
    }  

    toListUser(e){
        e.preventDefault();
        this.props.history.push(`/admin`);
    }
    
    render() {
        return (
            <EmployeeHierarchySystem 
                adminemployee={this.state.adminemployee} 
                hremployee={this.state.hremployee} 
                employee={this.state.employee}
                toListUser={(e)=> {this.toListUser(e)}}/>
        )
    }
}

export default withRouter(EmployeeHierarchy);
