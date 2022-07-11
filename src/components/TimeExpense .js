import React from "react";

import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TimeExpense () {
   

  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" className="navcolor" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="logonav"><FontAwesomeIcon icon={faUser}/></Navbar.Brand>
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


  <div className="container-fluid ">
    <div className="row">
      <div className="col-lg-12 p-0">
        <div className="container1 d-flex justify-content-end">
          <div className="img1 justify-content-center">
            <img
              src="./img/MicrosoftTeams-image (3).png"
              className="img1"
              alt=""
              style={{ width: "14rem", height: "14rem" }}
            />
          </div>
          <div className="profile">
            <h3 className="name mt-5">Harshitha Koniki</h3>
            <br />
            <br />
            <a href="" className="status mt-5">
              Set a Status
            </a>
          </div>
          <div className="links mt-4">
            <ul>
              <li>
                <Link to={'/home'}>Today</Link>
              </li>
              <li>
                <Link to={'/time'}>TimeExpense</Link>
              </li>
              <li>
                <Link to={'/activity'}>Activity</Link>
              </li>
            </ul>
          </div>
          <div className="btnn">
            <Link role={'button'} to={'/editProfile'} className="button">Edit Profile</Link>
            <button className="buttonn">Contact Info</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid p-0" style={{ 'width': '100%' }}>
        <div className="fdgh d-flex" >
          <div className="leftone">
            <div className="leftcontent">
              <h6>Contact Info</h6>
              <h6>Email</h6>
      
            </div>
          </div>
          <div className="rightone">
            <h1>This is TimeExpense Page</h1>
          </div>
        </div>
      </div>

  </>

  )
}


export default TimeExpense 