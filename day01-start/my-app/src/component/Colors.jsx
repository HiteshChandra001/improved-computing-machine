import { useState } from 'react'
import Box from './Box';
function Color() {
    const [count, setCount] = useState(0);
  
    const boxes = [
      {
        width: "50px", bgcolor: "red", isRound: true
      },
      {
        width: "100px", bgcolor: "green", isRound: true
      },
      {
        width: "150px", bgcolor: "blue", isRound: true
      },
    ]
  
    return (
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div style={{display:'flex'}}>
          {boxes.map((ele, i) =>
            <Box {...ele} key={i} />
          )}
        </div>
      </div>
    )
  }
  
  export default Color