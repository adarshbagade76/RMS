import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ProjectPortfolio() {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" className="navcolor" variant="dark">
        <Container>
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
    
      <div className="container-fluid">
      <thead>
          <tr>
            <th><h2 className='center'>Project Portfolio</h2></th>
            <Link role={'button'} to={'/editproject'} className="button portfoliobutton">Edit Profile</Link>
            <Link role={'button'} to={'/addproject'} className="buttonnewproject newprojectbtn">New Project</Link>
          </tr>
        </thead>
        <div className="row">
          <div className="col-sm-3 clear mt-5">
         <table className="table table-bordered">
         <tbody>
         <tr>
        <td>My Views<br/><a className='adarshlink' href='#'>+Save Current View</a></td>
        </tr>
        <tr>
        <td>Shared Views <br/><a className='adarshlink' href='#'>+Save Current View</a></td>
        </tr> <br></br>
      
      
    
        </tbody>
    
        <p><a className='adarshlink mb-3' href='#'>Everything</a></p>
        <p><a className='adarshlink mb-3' href='#'>Project Access:All</a></p>
        <p><a className='adarshlink mb-3' href='#'>Project Owner:All</a></p>
        <p><a className='adarshlink mb-3' href='#'>Project State:<b>Active</b></a></p>
        <p><a className='adarshlink mb-3' href='#'>Project Type:All</a></p>
        <p><a className='adarshlink mb-3' href='#'>Project:All</a></p>
        <p><a className='adarshlink mb-3' href='#'>Client:All</a></p>
        <p><a className='adarshlink mb-3' href='#'>Tag:All</a></p>
       
      </table>
      
          </div>
          <div className="col-sm-9 mt-5">
          <table className="table table-hover">
        <thead>
          <tr>
         
            {/* <th>  <FontAwesomeIcon icon="fab fa-500px" /></th> */}
           
            <th><FontAwesomeIcon icon="fab fa-500px" /></th>
            
            <th><a href='#' className='adarshlink'>Project Description</a></th>
            <th><a href='#' className='adarshlink'>Client Name</a></th>
            <th><a href='#' className='adarshlink'>Project Type</a></th>
            <th><a href='#' className='adarshlink'>Start At</a></th>
            <th><a href='#' className='adarshlink'>Ends At</a></th>
            <th><a href='#' className='adarshlink'>Project Owner</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default ProjectPortfolio;