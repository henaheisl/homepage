import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Page.scss";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hello Page</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
            content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
export default Page;
