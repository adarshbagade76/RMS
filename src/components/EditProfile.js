import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faUser } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Editprofile() {
    const additem=()=>{
        alert("hii")
    }
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

            <div className="container">
                <div className="row">
                    <div className='col-3'>
                    </div>
                    <div className='col-6' >
                        <h1 style={{ marginTop: "4rem" }}>Update Profile</h1>

                        <ul className="profile">
                            <li className='pic'>
                                <img className='img-thumbnail' alt="" src="https://assets.rm.smartsheet.com/images/anon.jpg" style={{ height: "14rem", width: "14rem" }} />
                            </li>

                            <li className='select'>
                                <h6>Select an image from your computer.</h6>
                                <input type="file" id="fileimage" />
                            </li>

                        </ul> <br />

                        <form className="d-contents justify-content-start">
                            <div className="row d-flex">
                                <div className="form-group col-md-6">
                                    <label for="input" className='textcolor'>First name</label>
                                    <input type="text" className="form-control boxcolor" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="input" className='textcolor'>Last name</label>
                                    <input type="text" className="form-control boxcolor" />
                                </div>
                            </div><br />

                            <div className="form-group">
                                <label for="inputAddress" className='textcolor'>Email</label>
                                <input type="email" className="form-control boxcolor" />
                            </div><br />

                            <div className="row d-flex">
                                <div className="form-group col-md-6">
                                    <label for="input" className='textcolor'>Cell phone</label>
                                    <input type="number" className="form-control boxcolor" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="input" className='textcolor'>Office phone</label>
                                    <input type="number" className="form-control boxcolor" />
                                </div>
                            </div><br />



                            <div className="row d-flex">
                                <div className="form-group col-md-6">
                                    <label for="Select" className='textcolor'>Location</label>
                                    <select id="Select" className="form-control boxcolor">
                                        <option>Select One</option>
                                        <option>Select Two</option>
                                        <option>Select Three</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="number" className='textcolor'>Employee Number</label>
                                    <input type="number" className="form-control boxcolor" />
                                </div>
                            </div><br />

                            <p className='heading'>
                                Administrator Fields
                            </p>
                            <h6 className='heading'>Availability</h6>
                            <h6 >
                                This section sets the availability for this person, including their first and last day of work and variable availability per day if working part-time. This availability is taken into account when creating new assignments. Time suggestions (unconfirmed hours) will not be scheduled if a person is unavailable.
                            </h6>

                            <div className="row d-flex">

                                <div className="form-group col-md-6">
                                    <label for="validationDefault04" className='textcolor'>First day of Work</label>
                                    <div className="dropdown">
                                        <input type="date" className="datet boxcolor"/>
                                    </div>
                                </div>


                                <div className="form-group col-md-6">
                                    <label for="validationDefault04" className='textcolor'>Last day of Work</label>
                                    <div className="dropdown">
                                        <input type="date" className="datet form-control boxcolor" />
                                    </div>
                                </div>
                            </div>

                        </form>

                        <div className="mb-5 mt-3">
                            <button className="button0 button0 ">Add Part-time Availability</button>
                        </div>

                        <h6 className='heading'>Utilization</h6>

                        <h6>This number is used to compare how the actual utilization compares to the target for this person.
                            The target is only used in the Utilization Report and does not impact availability.</h6>

                        <div className="form-group w-3">
                            <label for="validationDefault04"className='textcolor'>Utilization Targets(%)</label>
                            <input type="targets" className="form-control boxcolor" value={100}/>
                        </div>

                        <div className="mb-3 mt-3 heading">
                            <h6>Bill Rates</h6>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label className="form-check-label" for="exampleRadios1">
                                <h6>Use a modified bill rate for this person.</h6>
                            </label>
                            <input type="text" className='box1'/>
                        </div>


                        <div className="form-check mt-3">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
                            <label className="form-check-label" for="exampleRadios1">
                               <h6> Use the default bill rate based on discipline and role.</h6>
                            </label>
                        </div>


                        <div className="row d-flex mt-5">

                            <div className="form-group col-md-6">
                                <label for="validationDefault04" className='textcolor'>Discipline</label> <br/>
                               
                                <a href='#'className="form-select form-control boxcolor" required>
                                    <option></option>
                                  

                                </a>
                            </div>



                            <div className="form-group col-md-6">
                               

                                <label for="validationDefault04" className='textcolor'>Role</label> <br/>
                                <select className="form-select form-control boxcolor" required>
                                    <option selected value=""></option>
                                    <option>Add new</option>

                                </select>

                            </div>
                        </div>
                        <div className="mb-4 mt-4">

                            <h6 className='heading'>Approval Work Flow</h6>

                            <h6>Select the approver(s) for this person. Admins can approve time and expenses for any user regardless of this setting.</h6>

                        </div>

                        <div className="row d-flex mt-5">

                            <div className="form-group col-md-6">
                                <label for="validationDefault04" className='textcolor'>Approver(s)</label>
                                <select className="form-select form-control boxcolor" id="validationDefault04" required>
                                    <option>0 people selected</option>
                                    
                                </select>
                            </div>

                        </div>
                        <h6 className='heading mb-2'>Tags</h6>
                        <h6>Add one or more tags to this user or remove already assigned tags from the list below.</h6>
                        <div className="mb-5 mt-3">
                            <button className="button0 button0">Add Tags</button>
                        </div>


                        <hr/>
                        <div className="d-flex flex-row justify-content-between mb-5">

                            <button className="button0 button0">Reset Password</button>

                            <div>
                                <button className="button0 button0">Cancel</button> &nbsp;&nbsp;
                                <button className="button0 button0" style={{backgroundColor:"#51a0f5"}}>Save</button>
                            </div>

                        </div>

                    </div>

                    <div className="col-3">
                    </div>
                </div>

            </div>








        </>
    )
}

export default Editprofile