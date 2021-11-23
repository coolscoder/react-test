import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import classNames from 'classnames';
import './App.css';

const App = () => {
  const [animate1, setAnimate1] = useState(false)
  const [animate2, setAnimate2] = useState(false)
  const [animate3, setAnimate3] = useState(false)
  const [showLogo, setShowLogo] = useState(true)

  const handleStart = () => {
    setAnimate1(true)
    setTimeout(() => {setAnimate2(true)}, 1000)
    setTimeout(() => {setAnimate3(true)}, 2000)
    setTimeout(() => {setShowLogo(false)}, 4000)
  }

  return (
    <div className="App">
      {showLogo && <div className="d-flex mb-5">
        <img className={classNames('border me-3 art', animate1 && 'art-ani')} src="./art.jpg" />
        <img className={classNames('border me-3 art', animate2 && 'art-ani')} src="./art.jpg" />
        <img className={classNames('border me-3 art', animate3 && 'art-ani')} src="./art.jpg" />
      </div>}
      {!animate1 && <Button variant="outline-primary" onClick={handleStart}>Send My Team</Button>}
    </div>
  );
}

export default App;
