import React from 'react';

import './auth.styles.scss';
import SignIn from '../../shared/sign-in/sign-in.component';
import SignUp from '../../shared/sign-up/sign-up.component';


const AuthPage = () => (
    <div className='authentication-window'>
        <SignIn />
        <SignUp />
    </div>
)

export default AuthPage;