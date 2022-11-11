import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Pad from './components/Pad'
import messages from './assets/messages.json'
import React from 'react'

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
    </>
  );
}

export default App;
