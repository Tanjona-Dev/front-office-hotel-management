import LandingPage from "../Pages/Landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function RoutesManagement() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default RoutesManagement;
