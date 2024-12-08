import React from 'react'

const Box = ({ width, bgcolor, isRound }) => {
    return (
        <div style={{ textAlign:'center',color:'white',width: width, height: width, backgroundColor: bgcolor, borderRadius: isRound ? "50%" : "0%" }}>{isRound?"Circle":"Box"}</div>
    )
}

export default Box