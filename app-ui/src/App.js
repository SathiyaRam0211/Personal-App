import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomStepper from "./components/stepper/CustomStepper";
import Sidebar from "./components/generic/Sidebar";
import React from "react";
import { Fonts, FontLoader } from "./fonts/Fonts"; // Replace with the correct path

const App = () => (
  <>
    <FontLoader />
    <Fonts />
    <Sidebar />
    <CustomStepper />
  </>
);

export default App;
