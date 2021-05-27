import React from "react";
import { Button, Jumbotron } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Module Federation</h1>
        <hr className="my-2" />
        <p>Este componente é outro App!</p>
        <p className="lead">
          <Button color="primary">Button</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
