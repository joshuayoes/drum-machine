import React from "react";
import DrumPadButtons from "./components/DrumPadButtons";
import Display from "./components/Display";
import "./App.scss";

const App: React.FC = () => {
  return (
    <main className="App" id="drum-machine">
      <Display />
      <DrumPadButtons />
    </main>
  );
};

export default App;
