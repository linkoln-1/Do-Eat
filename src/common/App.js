import DetailedInformation from "../components/Dev_linkoln_Work/index";
import { Routes, Route } from "react-router-dom";
import Content from "./Content";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/DetailedInformation" element={<DetailedInformation />} />
      </Routes>
    </div>
  );
}

export default App;
