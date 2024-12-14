import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [tame, setTame] = useState(5)

  useEffect(() => {
    console.log("ue");
    const intId=setInterval(() => {
      
    console.log("start");

      setTame((t)=> {
        if(t<=1){
          clearInterval(intId);
          console.log("intvrl clear");
        }
        return t - 1;
      });
    }, 1000);

    return()=>{
      clearInterval(intId);
    }
  }, [])

  return (
    <div>time is: {tame}</div>
  )
}

export default Timer