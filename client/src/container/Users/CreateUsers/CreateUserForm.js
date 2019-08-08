import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';

const CreateUserForm = (props) => {
    const {handleChange, onClick, namevalid, emailvalid, dropdown, selectValue} = props;
    
    return(
        <div className="create-users">
            <h3>Add an Employee</h3>
            <div className="create-user-form col-12 d-flex flex-row">
                <form className="user-form" id="userForm">
                    <div className="form-input d-flex flex-column align-items-flex-start justify-content-space-around">
                        <div className="validity">
                            <p>{namevalid}</p>
                        </div>
                        <Input  type="text" 
                                id="userName" 
                                className="input-field" 
                                name="username" 
                                onChange={handleChange}
                                label="Name"
                        />
                    </div>
                    <div className="form-input d-flex flex-column align-items-flex-start justify-content-space-around">
                        <div className="validity">
                            <p>{emailvalid}</p>
                        </div>
                        <Input  type="text" 
                                id="email" 
                                className="input-field" 
                                name="email"
                                onChange={handleChange}
                                label="Email"
                        />
                        
                    </div>

                    <div className="form-input d-flex flex-column align-items-flex-start justify-content-space-around">
                        
                        <Dropdown datas={[{name:"HR", _id:"hr"}, {name: "Employee", _id: "emp"}]} title="Role" name="role" onChange={selectValue}/>

                    </div>

                    <div className="form-input d-flex flex-column align-items-flex-start justify-content-space-around">
                        
                        <Dropdown datas={dropdown} title="Department" name="department" onChange={selectValue}/>
                        
                    </div> 

                    <div className="form-input d-flex flex-column align-items-flex-start justify-content-space-around">
                        
                    </div>  


                    <div className="submit-button">
                        <Button className="primary" buttonName="Add Employee" handleClick={onClick}/>
                    </div>            
                </form>
            </div>
        </div>
    )
}

export default CreateUserForm;
