import React, { useState } from 'react'
import ChatRoom from './ChatRoom';

const ChatApp = () => {
    const [roomId,setRoomId]=useState('general');
    const [show,setShow]=useState(true);
  return (
    <div>
        <select value={roomId} onChange={(e)=>setRoomId(e.target.value)}>
            <option value="general">General</option>
            <option value="music">Music</option>
            <option value="sport">Sport</option>
        </select>
        <button onClick={()=>setShow(!show)}>{show?"Close":"Open"}</button>
        {show && <ChatRoom roomId={roomId} />}
    </div>
  )
}

export default ChatApp