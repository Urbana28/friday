import React, {SetStateAction, Dispatch} from 'react';
import s from './../.././App.module.css'

import { NavLink } from 'react-router-dom';


interface SignInProps {
   email: string,
    password: string,
    setEmail:  Dispatch<SetStateAction<string>>,
    setPassword:  Dispatch<SetStateAction<string>>
    setCheck: Dispatch<SetStateAction<boolean>>
    loginMe: (email: string, password: string, rememberMe: boolean) => void
    check: boolean
}

const SignIn: React.FC<SignInProps> = ({email,password,setEmail,setPassword, check, setCheck, loginMe}) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        loginMe(email, password, check)
    };
    return (
        <div className={s.signIn}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e)=> setEmail(e.currentTarget.value)} type="text" placeholder={'login'} value={email}/>
                </div>
                <div>
                    <input onChange={(e)=> setPassword(e.currentTarget.value)} type="text" placeholder={'password'} value={password}/>
                </div>

                <div>
                    <button>Sign in</button>
                </div>
                <div>
                    <NavLink to='/forgotPage'>forgot password?</NavLink>
                </div>
                <div>

                    <input checked={check} onChange={(e) => setCheck(e.currentTarget.checked)} type="checkbox"/> remember me
                </div>
            </form>

            <NavLink to='/registerPage'>Registration</NavLink>


        </div>
    );
};

export default SignIn;
