import Pad from '../../components/Pad'
import messages from '../../database/messages.json'
import { GridContainer } from './styles';

function Launchpad() {
  return (
    <>
        <GridContainer>
            {
              messages.map((msg,index) => <Pad message={msg} src={index} key={index} />)
            }
        </GridContainer>
    </>
  );
}

export default Launchpad;