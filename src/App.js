import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar/NavigationBar";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/ResumeTemplates" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
