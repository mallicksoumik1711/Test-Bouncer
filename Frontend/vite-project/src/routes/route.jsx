import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import ShowData from "../pages/ShowData";
import UpdateData from "../pages/UpdateData";

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/show" element={<ShowData />} />
        <Route path="/update/:id" element={<UpdateData />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
