import React, { Fragment } from 'react';
import CreateUserForm from './CreateUserForm';
import request from 'request';

import './style.scss';

export class CreateUsers extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            department:'',
            role:'',
            email:'',
            emailvalid : '',
            namevalid : '',
            datas:[],
            _id:"",
            deptname:"",
            depthead:"",
        }
    }

    componentDidMount(){
        var myJSONObject = {
            "_id" : this.state._id,
            "name" : this.state.deptname,
            "depthead": this.state.depthead,                       
        };

        request({
            url: "http://localhost:4000/deptgetdata",
            method: "GET",
            json: true,   // <--Very important!!!
            body: myJSONObject
        }, function (error, response, body){
            
            const datas=[];
            response.body.data.map(data => {
                const obj =[
                    {
                        _id: data._id,
                        name : data.name,
                        depthead: data.depthead
                    }
                ]
                Array.prototype.push.apply(datas, obj)                   
            }) 
            this.setState({
                datas:datas,
            })
            
        }.bind(this));        
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]: value,
        })

        this.validateInput(name,value);
    }

    validateInput = (name,value) => {        
        if (name == 'username'){
            if ((/^[A-Z][a-z]+(([',. -][A-Z][a-z])?[a-zA-Z]*)*$/).test(value)){
                this.setState({namevalid: 'valid'})
            }
            else{
                this.setState({namevalid: 'invalid'})
            }
        }

        else if (name == 'email'){
            if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)){
                this.setState({emailvalid: 'valid'})
            }
            else{
                this.setState({emailvalid: 'invalid'})
            }
        }               
    }

    sendEmail(){
        const obj = {
            email: this.state.email
        };
        request(
            {
                url: 'http://localhost:4000/resetpassword/sendlinktoemail',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'sgdjajdajdjasdjas'
                },
                method: 'POST',
                json: true,
                body: obj
            },
            (error, response) => {
                let errors = {};
                console.log(response);
                if (response.body.message.success) {
                    this.setState({ isSentSuccess: true });
                } else {
                    console.log(response);
                    errors['email'] = `${response.body.message.error}`;
                    this.setState({ errors });
                }
            }
        );
    }

    generatePassword(){        
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
     
        return retVal;
               
    }

    buttonClick(e){
        e.preventDefault();        

        const password = this.generatePassword();
        
        if (this.state.email != "" && this.state.username != "" && this.state.emailvalid==="valid" && this.state.namevalid==="valid"){
            var myJSONObject = {
                "name": this.state.username,
                "email": this.state.email,
                "password": password,
                "role": this.state.role,
                "department" :this.state.department,
            };

            request({
                url: "http://localhost:4000/register",
                method: "POST",
                json: true,   // <--Very important!!!
                body: myJSONObject
            }, function (error, response, body){
                console.log(response, error, body);
                alert(response.statusMessage);
                
            }); 

            setTimeout(() => {
                this.sendEmail();
              }, 5000);
            
           
        }
        
        else if(this.state.emailvalid ==="invalid")
        { 
            console.log("email invalid")
        }
        else if(this.state.namevalid ==="invalid")
        { 
            console.log("name invalid")
        }
        else{
            alert("empty");
        }
        
        
    }

    selectValue(name, title){
        this.setState({
            [title] : name
        })
    }

    render() {
        
        return (
           
           <CreateUserForm 
                handleChange={(e) => this.handleChange(e)} 
                emailvalid={this.state.emailvalid} 
                namevalid={this.state.namevalid}
                onClick={(e) => this.buttonClick(e)}
                dropdown={this.state.datas}
                selectValue={this.selectValue.bind(this)}/>
                           
                
        )
    }
}

export default CreateUsers;
