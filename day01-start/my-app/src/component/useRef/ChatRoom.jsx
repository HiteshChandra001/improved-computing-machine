import React, { useEffect, useState } from 'react'
import { createConection } from './createConection';

const ChatRoom = ({roomId}) => {
    const [server,setServer]=useState('http://localhost:5173');

    useEffect(()=>{
        const {connect,disconnect}=createConection(server,roomId);

        connect();

        return ()=>{
            disconnect();
        }
    },[server,roomId])

  return (
    <div>
        <h6>Update Server Url: <input value={server} onChange={(e)=>setServer(e.target.value)} /></h6>
    </div>
  )
}

export default ChatRoom