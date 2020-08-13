import React from 'react';

import './auth.styles.scss';

import SignIn from '../../shared/sign-in/sign-in.component';

const AuthPage = () => (
    <div className='authentication-window'>
        <SignIn />
    </div>
)

export default AuthPage;