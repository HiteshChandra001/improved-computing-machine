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
        <button onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
        {show && <ChatRoom />}
    </div>
  )
}

export default ChatApp