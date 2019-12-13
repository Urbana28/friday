import React, {SetStateAction, Dispatch} from 'react';
import s from './../.././App.module.css'

import { NavLink } from 'react-router-dom';


interface SignInProps {
    login: string,
    password: string,
    setLogin:  Dispatch<SetStateAction<string>>,
    setPassword:  Dispatch<SetStateAction<string>>
}

const SignIn: React.FC<SignInProps> = ({login,password,setLogin,setPassword}) => {

    return (
        <div className={s.signIn}>
            <div>
                <input onChange={(e)=> setLogin(e.currentTarget.value)} type="text" placeholder={'login'} value={login}/>
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
                <input type="checkbox"/> remember me
            </div>
            <NavLink to='/registerPage'>Registration</NavLink>


        </div>
    );
};

export default SignIn;
