import React from "react";
import classNames from "classnames";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <div className="logo-container">
        <img className={classNames('border mt-5 landing')} src="./art.jpg" />
        <img className={classNames('border landing landing-img')} src="./art.jpg" />
        <img className={classNames('border mt-5 landing')} src="./art.jpg" />
      </div>
      <img className="mega" src="./mega.png" />
      <p className="title">ACHIEVEMENT UNLOCKED</p>
      <p className="mb-5 description">Your horde has risen to the challenge and won! We've added your reward to your wallet</p>
      <Footer />
    </div>
  )
}

export default Landing