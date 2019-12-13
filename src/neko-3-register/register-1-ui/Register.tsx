import React from 'react';
import './Register.css'
import useForm from "react-hook-form";

interface RegisterProps {

}

const Register: React.FC<RegisterProps> = () => {

    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data: any) => {
        console.log(data)
    };

    return (
        <div className='register'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Register</h1>

                    <input ref={register((
                        {
                            required: 'Field is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        }))} name='email' placeholder='example@mail.com' className={errors.email ? 'input_error' : 'input'} type="text"/>
                    {errors.email && errors.email.message && <span className='loginError'>{errors.email.message}</span>}


                    <input ref={register({required: true})} name='password'  placeholder='password'
                           className={errors.password ? 'input_error' : 'input'} type="password"/>
                    {errors.password && <span className='loginError'>Field is required</span>}


                    <input ref={register({required: true})} name='repeatPassword' placeholder='repeatPassword'
                           className={errors.repeatPassword ? 'input_error' : 'input'} type="password"/>
                    {errors.repeatPassword && <span className='loginError'>Field is required</span>}



                <button type='submit' className='btn'>Register</button>
            </form>
        </div>

    );
};

export default Register;
