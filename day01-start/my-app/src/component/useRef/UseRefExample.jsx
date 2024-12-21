import React, { useRef } from 'react'
import Btn from './Btn';

const UseRefExample = () => {

    const ref=useRef(null);

    const handleClick=(v)=>{
        ref.current.focus();
        ref.current.value=v;
    }

  return (
    <div>
        <select ref={ref} name="num" id="num" >
        <option value="">--select--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
        <Btn handleClick={handleClick} v={1} />
        <Btn handleClick={handleClick} v={2} />
        <Btn handleClick={handleClick} v={3} />
    </div>
  )
}

export default UseRefExample