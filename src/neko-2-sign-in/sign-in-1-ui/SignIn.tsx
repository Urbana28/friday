import React from 'react';
import s from './../.././App.module.css'
import ForgotPage from "../../neko-4-forgot/forgot-1-ui/ForgotPage";

interface SignInProps {

}

const SignIn: React.FC<SignInProps> = ({}) => {

    return (
        <div className={s.signIn}>
            sign-in
            <div>
                <input type="text" placeholder={'login'}/>
            </div>
            <div>
                <input type="text" placeholder={'password'}/>
            </div>

            <div>
                <button>Sign in</button>
            </div>
            Forgot password?
          {/*  <div>
                <Navlink to='/forgotPage'></Navlink>
            </div>*/}
            <div>
                <input type="checkbox"/> remember me
            </div>
            Registration


        </div>
    );
};

export default SignIn;
