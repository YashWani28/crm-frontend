import React, { useState } from 'react'
import './ClientLogin.css';
import { ClientLoginForm } from '../../components/ClientLoginForm';
import { ClientForgotPasswordForm } from '../../components/ClientForgotPassword';

export const ClientLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formSwitch, setformSwitch] = useState('login');

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleLoginClick = (e) => {
        e.preventDefault();

        //* more validation can be added here like checking length etc

        //* call API to submit the form here

        console.log(email, password);

    }

    const formSwitcher = (val) => {
       
        setformSwitch(val);
        
    }
    return (

        <div className='clientlogincontainer bg-info'>
            {formSwitch === "login" &&
                (<ClientLoginForm handleOnChange={handleOnChange} handleLoginClick={handleLoginClick} formSwitcher={formSwitcher}></ClientLoginForm>
                )}
            {formSwitch === "reset" && (<ClientForgotPasswordForm formSwitcher={formSwitcher}></ClientForgotPasswordForm>)

            }
        </div>
    )
}
