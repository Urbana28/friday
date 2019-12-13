import React, { useState } from 'react';
import SignIn from "./SignIn";

const SignInContainer: React.FC = () => {
    // logic
   const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SignIn login={login} setLogin={setLogin} password={password} setPassword={setPassword}/>
    );
};


export default SignInContainer;
