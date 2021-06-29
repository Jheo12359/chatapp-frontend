import React, { useState } from 'react';
import Button from './Button';
import Header from './Header';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function signUp(){
        // console.warn(username, password);
        let item = {username, password};
        // console.log(item);

        if(!username){
            alert('Please type a username');
        } else if (!password){
            alert('Please type a password');
        } else {

        let result = await fetch("http://localhost:8000/api/register",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json();
        console.log("result", result);
        alert('Account has been created');
        setUsername('');
        setPassword('');
        }
    }

    return (
        <>
        <Header />
        <div className='add-form'>
            <h3>Create account</h3>
            <div className='form-control'>
                <label>Username</label>
                <input 
                    type='text' 
                    placeholder='Username' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                >
                </input>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input 
                    type='password'  
                    placeholder='Password'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>
            </div>
            <Button onClick={signUp} color='green' text='Register' className='btn btn-block'/>
        </div>
        </>
    )
}

export default Register
