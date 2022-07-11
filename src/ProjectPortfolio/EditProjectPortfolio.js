import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useLocation} from 'react-router-dom';

function EditProjectPortfolio() {

var location = useLocation()
  




  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navcolor expabdnavbar" variant="dark" >
        <Container style={{ margintop: "-6rem" }}>
          <Navbar.Brand href="#home" className="logonav"><FontAwesomeIcon icon={faUser} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">rgt</Nav.Link>
              <Nav.Link href="#pricing">RMS</Nav.Link>
              <Nav.Link href="#pricing">Projects</Nav.Link>
              <Nav.Link href="#pricing">schedule</Nav.Link>
              <Nav.Link href="#pricing">Analytics</Nav.Link>

            </Nav>
            <Nav>
              <Nav className="marginleftnav">
                <Nav.Link href="#deets">Trail: 6 days left</Nav.Link>
                <NavDropdown title="Help" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Setting" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">My Preferences</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Account Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login">
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />

                </form>

              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <div className="container-fluid rightcontent">
        <div className="row">
          <div className="col-3">
            <div className='editbox'> </div>
          </div>
          <div className="col-9">
            {/* <h1>{inputData.email} </h1>  */}
            <ul className='brief'>
              <li><a href="#home">Breif</a></li>
              <li><a href="#news">Schedule</a></li>
              <li><a href="#contact">Worklist</a></li>
              <li><a href="#about">Activity</a></li>
            </ul>

          </div>

        </div>
      </div>

      <div className="container-fluid  bodysection">
        <div className="row">
          <div className="col-3 ">
          <h1>bhfjhjhfshjjkjhjhjjshfedsfr</h1>
          </div>
          <div className="col-9 whitebackground mt-5">
          <h1>bhfjhjhfshjjkjhjhjjshfedsfr</h1>
          <h3>fcedhjahsghjghhggdeghegqjghghsjsjshsj</h3>
          <h1>bhfjhjhfshjjkjhjhjjshfedsfr</h1>
          <h3>fcedhjahsghjghhggdeghegqjghghsjsjshsj</h3> 
          <h1>bhfjhjhfshjjkjhjhjjshfedsfr</h1>
          <h3>fcedhjahsghjghhggdeghegqjghghsjsjshsj</h3>
          <h1>bhfjhjhfshjjkjhjhjjshfedsfr</h1>
          <h3>fcedhjahsghjghhggdeghegqjghghsjsjshsj</h3>
          </div>

        </div>
      </div>


    </>
  )
}

export default EditProjectPortfolio