import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar/NavigationBar";
import ResumeTemplates from "./Pages/ResumeTemplates";
import AboutUs from "./Pages/AboutUs";
function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/ResumeTemplates" element={<ResumeTemplates />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
