import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import UserMoreInfo from "./components/UserMoreInfo";
import MoreInfo from "./components/UserMoreInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:userId" element={<UserMoreInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
