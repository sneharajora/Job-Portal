import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes } from "react-router-dom";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import Home from "./pages/Home";
import RecruiterLogin from "./components/RecruiterLogin";
import Dashboard from "./pages/Dashboard";
import AddJobs from "./pages/AddJobs";
import ViewApplications from "./pages/ViewApplications";
import ManageJobs from "./pages/ManageJobs";

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/apply-jobs/:id" element={<ApplyJob />}>
          Apply
        </Route>
        <Route path="/applications" element={<Applications />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJobs />}></Route>
          <Route path="manage-job" element={<ManageJobs />}></Route>
          <Route
            path="view-applications"
            element={<ViewApplications />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
