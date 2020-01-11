import React from "react";
import DrumPadButtons from "./components/DrumPadButtons";
import "./App.scss";

const App: React.FC = () => {
  return (
    <main className="App" id="drum-machine">
      <section id="display"></section>
      <DrumPadButtons />
    </main>
  );
};

export default App;
