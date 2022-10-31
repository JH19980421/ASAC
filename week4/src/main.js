import { React, useState, useEffect } from 'react';

function Main() { 
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    useEffect(() => {
        checkEmailVal();
    }, [emailInput]);

    const checkEmailVal = (email) => {
        const regExp = /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+))|(".+"))@(([^<>()[].,;:\s@"]+.)+[^<>()[].,;:\s@"]{2,})$/i

        return email.match(regExp)? true: false;
    }

    const checkPwVal = (pw) => {
        const regExp = /^(?=.[a-zA-z])(?=.[0-9])(?=.[$~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$~!@$!%*#^?&\(\)-_=+]).{8,20}$/

        return pw.match(regExp)? true: false;
    }

    return (
        <div>
            <div>email</div>
            <input type="text"></input>

            <div>password</div>
            <input></input>
        </div>
    );
}

export default Main;