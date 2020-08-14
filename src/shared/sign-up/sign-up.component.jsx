import React from 'react';

import FormInput from '../../shared/form-input/form-input.component';
import CustomButtonComponent from '../../shared/button/button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.component';

class SignUp extends React.Component{
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword} =  this.state;
        
        if (password !== confirmPassword) {
            return alert('Passwords dont match');
        }

        if(!displayName){}
        if(!email){}


        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            
        } catch(error) {
            console.log(error)
        }

        this.setState({
            displayName: '',
            email: '', 
            password: '', 
            confirmPassword: ''
        })
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='form-wrapper'>
                <h2 className='title'>I do not have an account!</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                        name='displayName'
                        label='Display Name'
                        value={displayName}
                        handleChange={this.handleChange}
                        required></FormInput>
                    <FormInput type='email'
                        name='email'
                        label='E-mail'
                        value={email}
                        handleChange={this.handleChange}
                        required></FormInput>
                    <FormInput type='password'
                        name='password'
                        label='Password'
                        value={password}
                        handleChange={this.handleChange}
                        required></FormInput>
                    <FormInput type='password'
                        name='confirmPassword'
                        label='Confirm Password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required></FormInput>
                    <div className='form-buttons'>
                        <CustomButtonComponent type='submit'>
                            Sign In
                        </CustomButtonComponent>
                    </div>

                </form>
                
            </div>
        )
    }
}

export default SignUp;