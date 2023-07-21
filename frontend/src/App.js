import Sign from "./components/Sign";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/new-user-register" element={<Sign />} />
      </Routes>
    </>
  );
}

export default App;
