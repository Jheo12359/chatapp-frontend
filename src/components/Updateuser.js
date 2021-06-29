import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import { useHistory } from 'react-router-dom';

const Updateuser = () => {

    let user = JSON.parse(localStorage.getItem('user-info'));

    const userid = user.id;
    const [username, setUsername] = useState(user.username);
    const [newpassword, setPassword] = useState('');
    const history = useHistory();

    async function update(){
        // console.warn(username, password);
        let item = {username, newpassword,userid};
        // console.log(item);

        let result = await fetch("http://localhost:8000/api/updateaccount",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json();
        console.log("result", result);
        alert('Account has been updated');
        localStorage.clear();
        history.push('/login');
    }

    return (
        <>
        <Header />
        <div className="wrapper">
            <h1>Account</h1>
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
                <label>New Password</label>
                <input 
                    type='password'  
                    placeholder='New Password'
                    value={newpassword} 
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>
            </div>
            <Button onClick={update} color='green' text='Update' className='btn btn-block'/>
        </div>
        </>
    )
}

export default Updateuser
