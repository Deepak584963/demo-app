import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import AddRanch from "./Components/AddRanch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-ranch" element={<AddRanch />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
