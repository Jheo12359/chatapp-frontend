import React, { useState, useEffect } from 'react';
import Header from './Header';
import Button from './Button';
import Messages from './Messages';


const Chatui = () => {
    // const history = useHistory();
    let user = JSON.parse(localStorage.getItem('user-info'));

    const [userMessage, setUserMessage] = useState('');
    let username = user.username;

    async function sendMessage(){

        let item = {userMessage, username};

        let result = await fetch("http://localhost:8000/api/savemessage",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json();
        console.log("result", result);
        setUserMessage('');
        window.location.reload();
    }

    const [data, setData] = useState([]);

    useEffect( async () => {

        let result = await fetch('http://localhost:8000/api/list');
            result = await result.json();

        setData(result);
        
    },[])

    console.warn("result", data);

    return (
        <>
        <Header />
        <input type='hidden' value={username}></input>
        <h1>Chat Page</h1>
        <div className="wrapper">
            <Messages data={data}/>
        </div>
        <div className='form-control'>
            <input 
                type='text' 
                placeholder='message' 
                value={userMessage} 
                onChange={(e) => setUserMessage(e.target.value)}
            >
            </input>
            <Button onClick={sendMessage} color='#0d6efd' text='send message' className='btn btn-block'/>
        </div>
        </>
    )
}

export default Chatui
