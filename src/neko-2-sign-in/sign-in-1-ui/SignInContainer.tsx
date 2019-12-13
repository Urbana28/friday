import React, { useState } from 'react';
import SignIn from "./SignIn";
import {useDispatch} from "react-redux";
import { signIn } from '../sign-in-2-bll/signInThunks';

const SignInContainer: React.FC = () => {
    // logic
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);


    const dispatch = useDispatch();

    const loginMe = (email: string, password:string, rememberMe: boolean) => {
        dispatch(signIn(email, password, rememberMe))
    };


    return (
        <SignIn loginMe={loginMe} check={check} setCheck={setCheck } email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
    );
};


export default SignInContainer;
