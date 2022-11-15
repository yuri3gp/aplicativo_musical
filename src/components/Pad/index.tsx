import { Container} from './styles'

interface props{
    src: number
    message: String
}

function Pad(props : props) {
    const audio = new Audio(require(`../../assets/audios/${props.src}`))
    return (
        <>
            <Container onClick={() => { audio.play() }}>
                {props.message}
            </Container>
        </>
    )
}

export default Pad