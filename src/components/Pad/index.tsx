import './Pad.css'
import React from 'react'


function Pad(props : any) {
    const audio = new Audio(require(`../../assets/audios/${props.src}`))
    return (
        <>
            <div className="grid-item" onClick={() => { audio.play() }}>{props.message}</div>
        </>
    )
}

export default Pad