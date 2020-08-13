import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../shared/form-input/form-input.component';
import CustomButtonComponent from '../../shared/button/button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSumbit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value});
    }

    render() { 
        return(
            <div className='form-wrapper'>
                <h2 className='title'>I already have an account</h2>  
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSumbit}>
                    <FormInput name='email' type='email'
                        handleChange={this.handleChange}
                        label='Email'
                        value={this.state.email} required/>
                    <FormInput name='password' type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        value={this.state.password} required/>
                    <div className='form-buttons'>
                        <CustomButtonComponent type='submit'>
                            Sign In
                        </CustomButtonComponent>
                        <CustomButtonComponent onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default SignIn;