import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";
import "./app.css";

const App = () => {
  // MF
  const HomePage = React.lazy(() => import("HomeApp/HomePage"));
  const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

  return (
    <Router>
      <div>
        <Navbar color="dark" dark expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<h1>Loading...</h1>}>
              <HomePage />
            </Suspense>
          </Route>
          <Route exact path="/contact">
            <Suspense fallback={<h1>Loading...</h1>}>
              <ContactPage />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
