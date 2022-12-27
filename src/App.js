import {React, useState} from 'react';
import './App.css';


const Modal = ({ open, setOpen }) => {
  return (
    <div className={`overley  animated ${ open ? 'show' : ''}`}>
        <div className="modal" onClick={() => setOpen(false)}>
          </div>
        <p>Bla Bla Bla</p>
    </div>
  )
}


const App = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
          <button onClick={() => setOpen(true)}>
            Open modal
          </button>
      </div>
      <Modal open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
