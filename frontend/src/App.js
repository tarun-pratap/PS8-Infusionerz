import Login from "./components/Login";
import Sign from "./components/Sign";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/new-user-register" element={<Sign />} />
        <Route path="/login-user" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
