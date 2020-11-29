import React, { useState } from 'react'
import Home from './pages/Home'
import Film from './pages/Film'
import Audio from './pages/Audio'
import Musician from './pages/Musician'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  NavItem,
  NavLink
} from 'reactstrap'

import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Router>

        <nav id='myNav'>

          <Navbar light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse className="text-center" isOpen={isOpen} navbar>
              <Nav className="mr-auto ml-auto " navbar>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                {" "}
                <NavItem>
                  <Link to="/film">Film</Link>
                </NavItem>
                {" "}
                <NavItem>
                  <Link to="/audio">Audio</Link>
                </NavItem>
                {" "}
                <NavItem>
                  <Link to="/musician">Musician</Link>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/film" component={Film} />
            <Route path="/audio" component={Audio} />
            <Route path="/musician" component={Musician} />
          </Switch>
        </nav>
      </Router>
    </>
  )
}

export default App