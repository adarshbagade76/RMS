
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/style.css"
import KekaLogin from "./components/KekaLogin";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Home from "./components/Home";
import TimeExpense from "./components/TimeExpense ";
import Activity from "./components/Activity";
import EditProfile from "./components/EditProfile";
import ProjectPortfolio from "./components/ProjectPortfolio";
import EditProjectPortfolio from "./components/EditProjectPortfolio";
import AddProject from "./components/AddProject";





function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KekaLogin />} />
        <Route path="/home" element={<Home />} />
       <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/time" element={<TimeExpense />} />
        <Route path="/activity" element={<Activity />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path="/project" element={<ProjectPortfolio/>}></Route>
        <Route path="/editproject" element={<EditProjectPortfolio/>}/>
        <Route path="/addproject" element={<AddProject/>}/>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
