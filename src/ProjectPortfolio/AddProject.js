import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faUser } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddProject(props) {
  const[Data,setData]=useState({});

useEffect(()=>{
  getData();
},[])

const getData=async()=>{
  //GET request using axios
 const storedata= await axios.get("https://jsonplaceholder.typicode.com/users/1")
setData(storedata.data)
}


// useEffect(() => {
//   // POST request using axios inside useEffect React hook
//   const article = { title: 'React Hooks POST Request Example' };
//   axios.post('https://jsonplaceholder.typicode.com/users', {article})
//       .then(storedata => setData(storedata.data.id));

// // empty dependency array means this effect will only run once 
// }, []);

const TransferData=()=>{
 props.userobj(Data)
}


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
                <Nav.Link href="#deets">KeKa</Nav.Link>
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
          {/* {console.log(Data)} */}
           
         
           
         
        <div className='col-6' >
    <h1 style={{ marginTop: "4rem" }}>Update Profile</h1>
      
            <ul className="profile">
              <li className='pic'>
                <div className='projectThumbnailFrameImageContainerLarge'></div>

              </li>

              <li className='select'>
                <h6>Select an image from your computer.</h6>
                <input type="file" id="fileimage" />
              </li>

            </ul> <br />

            <form className="d-contents justify-content-start">
              <div className="row d-flex">
                <div className="form-group">
                  <label for="inputAddress" className='textcolor miniproject'>email</label>
                  <input type="text" className="form-control boxcolor" value={Data.email} />
                </div><br />
              </div><br />

              <div className="row d-flex">
                <div className="form-group col-md-6">
                  <label for="input" className='textcolor'>Client</label>
                  <input type="number" className="form-control boxcolor data-bs-toggle=" value={Data.username}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="input" className='textcolor'>Project Code</label>
                  <input type="number" className="form-control boxcolor" />
                </div>
              </div><br />
              <div className="row d-flex">
                <div className="form-group col-md-6">
                  <label for="input" className='textcolor'>Project Type</label>
                  <input type="number" className="form-control boxcolor"/>
                </div>
              </div>

              <div className="row d-flex">
                <div className="form-group col-md-6">
                  <label for="input" className='textcolor'>Start Date</label>
                  <input type="number" className="form-control boxcolor" />
                </div>
                <div className="form-group col-md-6">
                  <label for="input" className='textcolor'>End Date</label>
                  <input type="number" className="form-control boxcolor" />
                </div>
              </div><br />
              <div className="row d-flex">
                <div className="form-group col-md-6">
                  <label for="input" className='textcolor'>Duration(working days)</label>
                  <input type="number" className="form-control boxcolor" />
                </div>
                <div className="form-group col-md-6 checkbutton">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label  className="form-check-label" for="flexCheckDefault">
                    Lock Duration
                  </label>
                </div>
              </div>
              <div className="row d-flex">
                <div className="form-group col-md-6">
                  <label for="input" className='textcolor'>Project Owner</label>
                  <input type={'text'} className="form-control boxcolor" />
                </div>
              </div>


              <h6 className='heading mt-3'>Notification</h6>
              <h6 >
                Control whether people should be notified about changes to the project or their<br /> assignments.

              </h6>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Enable email notifications
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Mute email notifications
                </label>
              </div>


              <h6 className='heading mt-5'>Time Budget</h6>
              <h6 >
                The time budget is the allocated labor for this project expressed in days or hours. <br />
                The hours worked by team members weigh against this budget.

              </h6>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Do not specify a time budget for this project
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Specify one time budget for the entire project
                </label>
              </div>

              <div className="form-check ">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Specify this budget for each phase
                </label>
              </div>

              <h6 className='heading mt-5'>Fee Budget</h6>
              <h6 >
                The fee budget is the allocated labor for this project expressed in a currency amount.<br /> The hours worked by team members,
                taking their bill rates into account, weigh against this <br /> budgeget.

              </h6>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Do not specify a time budget for this project
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Specify one time budget for the entire project
                </label>
              </div>

              <div className="form-check ">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Specify this budget for each phase
                </label>
              </div>



              <h6 className='heading mt-5'>Expense Budget</h6>
              <h6 >
                This is the non-labor related budget for this projet.

              </h6>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Do not specify a time budget for this project
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Specify one time budget for the entire project
                </label>
              </div>

              <div className="form-check ">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Specify this budget for each phase
                </label>
              </div>
              <h6 className='heading mt-5'>Bill Rates</h6>
              <h6 >
                Add rate for specific roles or disciplines. Bill rates are per hour.
              </h6>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <td>Default</td>
                    <td>Default</td>
                    <td><a href='#' className='adarshlink'>+Add a Role</a></td>

                  </tr>
                </thead>
              </table>
              <table className="table table-none">
                <thead>
                  <tr>
                    <td>Default</td>
                    <td> <p><input type="text" className='dollar' /></p></td>


                  </tr>

                </thead>
              </table>



              <h6 className='heading mt-5'>Time Entry Locking</h6>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Do not lock time entries for this project
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Lock all time entries for this project
                </label>
              </div>

              <div className="form-check ">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                <label className="form-check-label " htmlFor="flexRadioDefault2">
                  <p>Lock all time entries for this project that are older than</p> <p className='calender'><input className="increase" type="text" /></p><p className='moveon'>Calender days</p>
                </label>
              </div>


            </form>

            <div className="mb-5 mt-3">
              <button className="button0 button0 ">Add Part-time Availability</button>
            </div>


            <h6 className='heading mb-2'>Tags</h6>
            <h6>Add one or more tags to this user or remove already assigned tags from the list below.</h6>
            <div className="mb-5 mt-3">
              <button className="button0 button0">Add Tags</button>
            </div>


            <hr />
            <div className="d-flex flex-row justify-content-between mb-5">


              <div>
                <button className="button0 button0 mr-3">Cancel</button>
      
                <Link to="/editproject" type='button' state={{data : Data}} className="button0 button0" style={{ backgroundColor: "#51a0f5" }} >Save</Link>
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

export default AddProject