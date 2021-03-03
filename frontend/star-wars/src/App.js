import React from "react";
import IndexPage from "./components/IndexPage/IndexPage.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./style/CSS/App/App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IndexPage />
    </div>
  );
}

export default App;
