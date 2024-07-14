import React, { useState } from 'react'
import './ClientLogin.css';
import { ClientLoginForm } from '../../components/ClientLoginForm/ClientLoginForm';
import { ClientForgotPasswordForm } from '../../components/ClientForgotPassword';

export const ClientLogin = () => {
    const [formSwitch, setformSwitch] = useState('login');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleOnChange = (e) => {
    //     const { name, value } = e.target;
    //     if (name === 'email') {
    //         setEmail(value);
    //     } else if (name === 'password') {
    //         setPassword(value);
    //     }
    // }

    // const handleLoginClick = (e) => {
    //     e.preventDefault();

    //     //* more validation can be added here like checking length etc

    //     //* call API to submit the form here

    //     console.log(email, password);

    // }

    const formSwitcher = (val) => {
       
        setformSwitch(val);
        
    }
    return (

        <div className='clientlogincontainer bg-info'>
            {formSwitch === "login" &&
                (<ClientLoginForm formSwitcher={formSwitcher}></ClientLoginForm>
                )}
            {formSwitch === "reset" && (<ClientForgotPasswordForm formSwitcher={formSwitcher}></ClientForgotPasswordForm>)

            }
        </div>
    )
}
