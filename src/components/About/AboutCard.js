import React from "react";
import Card from "react-bootstrap/Card";
import Qualification from "./Qualification";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Sanjita Kumari </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently pursuing MCA from SRM University.
            
          </p>
          <Qualification />
          

          <p  className= "about-quote">
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sanjita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
