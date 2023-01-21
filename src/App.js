import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logindemo from "./Register/Login"
import HospitalHome from "./HospitalActivity/HospitalHome";
import DoctorNewAccount from "./Register/DoctorNewAccount"
import AccountVerification from "./Register/AccountVerification";
import PatientRegisterPage from "./Register/PatientRegisterPage";
import ForgottenPassword from "./Register/ForgottenPassword";



function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Logindemo />} />
      <Route path="/HospitalHome" element={<HospitalHome />} />
      <Route path="/HDNewAccountPage" element={<DoctorNewAccount />} />
      <Route path="/HDAccountVerification" element={<AccountVerification />} />
      <Route path="/PatientRegisterPage" element={<PatientRegisterPage />} />
      <Route path="/ForgottenPassword" element={<ForgottenPassword/>}/>

    </Routes>
  </Router>
 )

}

export default App;