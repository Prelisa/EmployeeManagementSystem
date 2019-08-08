import React from 'react';
import 'assets/styles/form.scss';
import Button from 'components/Button/index.jsx';
import Input from 'components/Input/index.jsx';
import Error from 'components/Error/index.jsx';
import { Link } from 'react-router-dom';
import ValidateField from 'utils/helpers/ValidateField';
import request from 'request';
import 'components/RadioButton/index.jsx';
import decoder from 'jwt-decode';
import AuthHelperMethods from 'utils/auth';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: '',
                password: ''
            },
            errors: {
                isValidForm: false
            },
            redirect: false
        };
    }
    toggleIcon(e) {
        this.setState({ isVisible: this.state.isVisible ? false : true });
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        let fields = this.state.fields;
        fields[name] = value;
        this.setState({ fields });
        this.setState({ [name]: value });
        let newState = JSON.parse(JSON.stringify(this.state.errors));
        //make changes to ingredients
        newState.email = undefined;
        newState.password = undefined;
        this.setState({
            errors: newState
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('hello');

        const error = ValidateField(this.state.fields);
        this.setState({ errors: error });
        console.log(error);
        console.log(error['isvalidForm']);

        if (error['isValidForm']) {
            console.log('validform');

            request(
                {
                    url: 'http://localhost:4000/login',
                    method: 'POST',
                    json: true,
                    body: this.state.fields
                },
                (error, response) => {
                    let errors = {};
                    if (response.statusCode === 401) {
                        console.log(response);
                        errors['form'] = `${response.body.message.error}`;
                        errors['isValidForm'] = false;
                        this.setState({ errors });
                    } else if (response.body.message.success) {
                        localStorage.setItem(
                            'token_id',
                            response.body.message.token
                        );
                        console.log(decoder(localStorage.getItem('token_id')));
                        if (response.body.message.data.role === 'admin') {
                            this.props.history.push('./admin');
                        }
                        if (response.body.message.data.role === 'employee') {
                            console.log('employee dashboard');
                        }
                        if (response.body.message.data.role === 'hr') {
                            this.props.history.push('./hr');
                        }
                    }
                }
            );
        }
    }
    componentDidMount() {
        const Auth = new AuthHelperMethods();
        const val = Auth.loggedIn();
        if (val) {
            this.props.history.push('/admin');
        }
    }
    render() {
        const Auth = new AuthHelperMethods();
        const val = Auth.loggedIn();
        console.log(val);
        return (
            <div>
                <div className="formbox">
                    <form
                        className="demo-form"
                        noValidate
                        onSubmit={e => this.handleSubmit(e)}
                    >
                        <div className="form-header">
                            <h2 className="form-heading">SIGN IN PAGE</h2>
                            <div className="form-descp">
                                <p className="">
                                    Enter you email and password to continue
                                </p>
                                <p className="">
                                    To reset password click on forgot password
                                    field
                                </p>
                            </div>
                        </div>
                        <div className="input-fields">
                            <Input
                                label={'Email'}
                                name={'email'}
                                type={'text'}
                                icon={false}
                                value={this.state.fields['email']}
                                onChange={e => this.handleUserInput(e)}
                                className={'normal'}
                            />
                            <Input
                                label={'Password'}
                                name={'password'}
                                type={
                                    this.state.isVisible ? 'text' : 'password'
                                }
                                onClick={this.handleToggle}
                                value={this.state.fields['password']}
                                onChange={e => this.handleUserInput(e)}
                            >
                                <i
                                    className={
                                        this.state.isVisible
                                            ? 'icon-eye'
                                            : 'icon-eye-slash'
                                    }
                                    onClick={e => this.toggleIcon(e)}
                                />
                            </Input>
                            <div className="remember_error_container">
                                <div className="remember_forgot_panel">
                                    <div>
                                        
                                        <span></span>
                                    </div>
                                    <Link to="/forgot-password">
                                        Forgot Password
                                    </Link>
                                </div>
                                <div className="error">
                                    {this.state.errors.form && (
                                        <Error
                                            errorMessage={`${
                                                this.state.errors.form
                                            }`}
                                            className={'warning'}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="fade-in">
                            <div className="buttonwrapper">
                                <Button
                                    buttonName={'LOGIN'}
                                    className={'primary'}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
