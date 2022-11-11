import './Pad.css'


function Pad(props) {
    const audio = new Audio(require(`../../assets/audios/${props.src}`))
    return (
        <>
            <div class="grid-item" onClick={() => { audio.play() }}>{props.message}</div>
        </>
    )
}

export default Pad