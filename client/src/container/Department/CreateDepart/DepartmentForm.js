import React from 'react';
import Input from 'components/Input';

const DepartmentForm = (props) => {
    const {name, handleChange, handleClick, namevalid} = props;
return (
    <div className="createDepart">
        <h3 className="m-2">Create Department</h3>
        <form className="d-flex flex-column justify-content-start align-items-start">
            
            <div className="createDepartForm form-group">
                <p className="namevalid">{namevalid}</p>
                <Input  type="text" 
                    name="department"
                    onChange={handleChange}
                    label="Department"
                />
                
            </div> 
            <button type="submit" className="submitBtn" onClick={handleClick}>Create</button>   
        </form>                
    </div>
    )

}

export default DepartmentForm;