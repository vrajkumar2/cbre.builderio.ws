import React from "react";
import Header from "./components/header";
import Stepper from "./components/stepper";
import Table from "./components/table";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Stepper />
      <Table />
    </div>
  );
}

export default App;
