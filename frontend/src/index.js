import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShowInterior1 from "./Store/ShowInterior1";
import ShowInterior2 from "./Store/ShowInterior2";
import Reservation from "./Service/Reservation";
import Mypage from "./Service/Mypage";
import Login from "./Signup_Login/Login";
import Signup from "./Signup_Login/Signup";
import SimpleInfo from "./Service/SimpleInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="ShowInterior1" element={<ShowInterior1 />}></Route>
      <Route path="ShowInterior2" element={<ShowInterior2 />}></Route>
      <Route path="Reservation" element={<Reservation />}></Route>
      <Route path="Mypage" element={<Mypage />}></Route>
      <Route path="Login" element={<Login />}></Route>
      <Route path="Signup" element={<Signup />}></Route>
      <Route path="SimpleInfo" element={<SimpleInfo />}></Route>
    </Routes>
  </BrowserRouter>
);
