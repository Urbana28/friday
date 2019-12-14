
import React, {SetStateAction, Dispatch} from 'react';
import s from './../.././App.module.css'

import { NavLink, Redirect } from 'react-router-dom';
import { NEKO_PATH } from '../../neko-1-main/main-1-ui/Routes';
import Preloader from "./Preloader";






interface SignInProps {
   email: string,
    password: string,
    setEmail:  Dispatch<SetStateAction<string>>,
    setPassword:  Dispatch<SetStateAction<string>>
    setCheck: Dispatch<SetStateAction<boolean>>
    loginMe: (email: string, password: string, rememberMe: boolean) => void
    check: boolean
    error: string | undefined
    token: string | null
    isFetching: boolean
}

const SignIn: React.FC<SignInProps> = ({token, email,password,
                                           setEmail,setPassword, check, setCheck,
                                           loginMe, error, isFetching}) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        loginMe(email, password, check)
    };


    if(token) return <Redirect to={NEKO_PATH} />
    return (
        <div className={s.signIn}>
            {error && <span className={s.error}>{error}</span>}
            {isFetching && <Preloader/>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e)=> setEmail(e.currentTarget.value)} type="text" placeholder={'login'} value={email}/>
                </div>
                <div>
                    <input onChange={(e)=> setPassword(e.currentTarget.value)} type="password" placeholder={'password'} value={password}/>
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
