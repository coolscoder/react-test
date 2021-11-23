import React from "react";
import { Button } from 'react-bootstrap'
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>Let 'em know</p>
      <div className="d-flex justify-content-center">
        <Button className="me-3" variant="outline-primary">
          <div className="d-flex align-items-center">
            <FaDiscord size={20} />
            <span className="ms-2">Discord</span>
          </div>
        </Button>
        <Button variant="outline-success">
          <div className="d-flex align-items-center">
            <FaTwitter size={20} />
            <span className="ms-2">Twitter</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Footer