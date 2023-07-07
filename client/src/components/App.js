import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar";
import UserDashboard from "../pages/UserDashboard";
import ViewProposal from "./ViewProposal";
import UserProposals from "./UserDashboard/UserProposals";
import Home from "../pages/Home";
import {VendorDashboard} from "../pages/VendorDashboard";
import VendorProposals from "./VendorProposals";

const img_url =
  "https://plus.unsplash.com/premium_photo-1664790560155-eeef67a1e77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXZlbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60";

function App() {
  
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="vendor-dashboard" element={<VendorDashboard />}>
            <Route
              path=""
              element={<VendorProposals />}
            />
          </Route>
          <Route path="user-dashboard" element={<UserDashboard />}>
            <Route path="" element={<UserProposals />} />
            <Route path="view-proposal/:id" element={<ViewProposal />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
