import DetailedInformation from "../components/Dev_linkoln_Work/index";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/DetailedInformation" element={ <DetailedInformation /> } />
     </Routes>
    </div>
  );
}

export default App;
