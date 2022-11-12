import Footer from './components/Footer'
import Header from './components/Header'
import Pad from './components/Pad'
import messages from './database/messages.json'
import React from 'react'
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header/>
        <div className='grid-container'>
            {
              messages.map((msg,index) => <Pad message={msg} src={index} key={index} />)
            }
        </div>
      <Footer/>
      <GlobalStyle/>
    </>
  );
}

export default App;
