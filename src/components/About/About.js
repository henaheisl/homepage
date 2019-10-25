import React from "react";
import { Card, Button } from "react-bootstrap";
import "./About.scss";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h2 className="display-4">About</h2>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              lorem
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default About;
