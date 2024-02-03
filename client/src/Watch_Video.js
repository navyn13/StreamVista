import './Watch_Video.css'
import React, { useState } from "react";
import { useEffect } from 'react';
import io, { Socket } from "socket.io-client"
import { useStateValue } from './StateProvider';
const socket = io('http://localhost:4000');






























function Watch_Video() {

    const [{ user }] = useStateValue();
    const [send_message, setSendMessage] = useState('');
    const [recieve_msg, setRecieveMessage] = useState('');
    const queryParams = new URLSearchParams(window.location.search);
    const roomID = queryParams.get('room');

    useEffect(() => {

        const handleReceiveMsg = (data) => {
            console.log(data)
            const p = document.createElement("p");
            p.innerText = data.username + " :" + data.message;
            document.querySelector('.messages').appendChild(p);
        };
        socket.on('recieve_msg',handleReceiveMsg)
        return () => {
            socket.off('recieve_msg', handleReceiveMsg);
        };
    }, [socket])

    socket.emit('joinRoom', roomID);

    function sendMessage() {
        console.log(user)
        document.getElementById('inp_msg').value = '';
        socket.emit("send_msg", { message: send_message, username: user.username, room: roomID});
        setSendMessage('')
    }

















    return (
        <div className='Watch_Video'>
            <div className='video_chat'>
                <div className='live_video'></div>
                <div className='title'><p>Valorant Live Stream. Let's Go!!</p></div>
            </div>
            <div className='live_chat'>
                <h2>Live Chat:</h2>
                <div className='messages'></div>
                <div className='msg_block'>
                    <input id='inp_msg' onChange={(e) => { setSendMessage(e.target.value) }}></input>
                    <button onClick={sendMessage}>Send</button>
                </div>

            </div>
        </div>
    )
}
export default Watch_Video