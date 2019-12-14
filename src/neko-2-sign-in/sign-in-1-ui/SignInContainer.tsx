import React, { useState } from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import { signIn } from '../sign-in-2-bll/signInThunks';
import { IAppStore } from '../../neko-1-main/main-2-bll/store';

const SignInContainer: React.FC = () => {
    // logic
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const {error, token} = useSelector((state: IAppStore) => (
        {error: state.signIn.error, token: state.signIn.token}
    ));


    const dispatch = useDispatch();

    const loginMe = (email: string, password:string, rememberMe: boolean) => {
        dispatch(signIn(email, password, rememberMe))
    };


    return (
        <SignIn token={token} error={error} loginMe={loginMe} check={check} setCheck={setCheck } email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
    );
};


export default SignInContainer;
