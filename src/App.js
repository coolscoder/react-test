import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './App.css';

const App = () => {
  const [animate, setAnimate] = useState(false)

  const handleStart = () => {
    setAnimate(true)
  }

  return (
    <div className="App">
      <div className="d-flex mb-5">
        <img className="border me-3 art art-1" src="./art.jpg" />
        <img className="border me-3 art art-2" src="./art.jpg" />
        <img className="border me-3 art art-3" src="./art.jpg" />
      </div>
      {!animate && <Button onClick={handleStart}>Send My Team</Button>}
    </div>
  );
}

export default App;
