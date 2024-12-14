import React from 'react'

export const createConection = (server,roomId) => {

  const connect=()=>{
    console.log(`connected with server: ${server} and roomid: ${roomId}`);
  }

  
  const disconnect=()=>{
    console.log(`disconnected with server: ${server} and roomid: ${roomId}`);
  }

  return {connect,disconnect}
}
