
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/style.css"
import KekaLogin from "./components/KekaLogin";
import LoginPage from "./components/LoginPage";

import Home from "./components/Home";
import TimeExpense from "./components/TimeExpense ";
import Activity from "./components/Activity";
import EditProfile from "./components/EditProfile";
import ProjectPortfolio from "./ProjectPortfolio/ProjectPortfolio";
import EditProjectPortfolio from "./ProjectPortfolio/EditProjectPortfolio";
import AddProject from "./ProjectPortfolio/AddProject";





function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<KekaLogin />} />
        <Route path="/home" exact element={<Home />} />
       <Route path="/login" element={<LoginPage/>}/>
        <Route path="/time" element={<TimeExpense />} />
        <Route path="/activity" element={<Activity />} />
        <Route path='/editprofile' exact element={<EditProfile />} />
        <Route path="/project" element={<ProjectPortfolio/>}></Route>
        <Route path="/editproject" exact element={<EditProjectPortfolio/>}/>
        <Route path="/addproject" element={<AddProject/>}/>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
