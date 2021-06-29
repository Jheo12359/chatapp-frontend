import { useState } from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function login(){
        console.warn(username, password);
        // console.warn(username, password);
        let item = {username, password};
        // console.log(item);
        let result = await fetch("http://localhost:8000/api/login",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json();
        
        if(result.error){
            alert(result.error);
            setUsername('');
            setPassword('');
        } else {
            localStorage.setItem("user-info",JSON.stringify(result))
            console.log("result", result);

            history.push('/chatui');
        }
    }
    return (
        <>
        <Header />
        <div className='login-form'>
            <h3>Login</h3>
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
            <Button onClick={login} color='#0d6efd' text='Login' className='btn btn-block'/>
        </div>
        </>
    )
}

export default Login
