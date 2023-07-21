import Hero from "./components/Hero";
import Ind_Policy_Page from "./components/Ind_Policy_Page";
import Login from "./components/Login";
import PolicyForm from "./components/PolicyForm";
import PolicyPage from "./components/PolicyPage";
import Sign from "./components/Sign";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/Policy_Components/Overview";
import KeyAdvantage from "./components/Policy_Components/KeyAdvantage";
import HowThisWorks from "./components/Policy_Components/HowThisWorks";
import Eligibility from "./components/Policy_Components/Eligibility";
import Downloads from "./components/Policy_Components/Downloads";

function App() {
  return (
    <>
      <Routes>
        <Route path="/new-user-register" element={<Sign />} />
        <Route path="/login-user" element={<Login />} />
        <Route path="/policy-redirect-page" element={<PolicyPage />} />
        <Route path="/policy-form" element={<PolicyForm />} />
        <Route path="/" element={<Hero />} />        
        <Route path="/ind-policy-page/:id" element={<Ind_Policy_Page />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/key-advantages" element={<KeyAdvantage />} />
        <Route path="/how-this-works" element={<HowThisWorks />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </>
  );
}

export default App;
