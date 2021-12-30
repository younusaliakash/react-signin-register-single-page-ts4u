import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Auth from "./Pages/Auth/Auth";


function RoutesPaths () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </Router>
  );
}

export default RoutesPaths;
