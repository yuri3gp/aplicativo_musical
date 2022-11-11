import './Pad.css'
import React, { useState } from 'react'

interface props{
    src: number
    message: String
}


function Pad(props : props) {
    const audio = new Audio(require(`../../assets/audios/${props.src}`))
    const [padcolor,setPadColor] = useState(`black`)

    return (
        <>
            <div 
            onMouseOver={()=>{setPadColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)}}
            onMouseUp={()=>{setPadColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)}}
            style={{backgroundColor: padcolor}}
            className="grid-item"
            onClick={() => { audio.play() }}
            >
            {props.message}
            </div>
        </>
    )
}

export default Pad