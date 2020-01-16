import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../redux/actions";

interface Props {
  keyCode: number;
  keyTrigger: string;
  displayName: string;
  url: string;
  dispatch: any;
}

const DrumPadButton: React.FC<Props> = ({
  keyCode,
  keyTrigger,
  displayName,
  url,
  dispatch
}) => {
  const playSound = () => {
    let audio = document.getElementById(keyTrigger) as HTMLAudioElement;

    //necessary to reset the audio if it has been pressed multiple times
    audio.currentTime = 0;
    audio.play();

    //Updates which key has been pressed in section#display HTML element
    dispatch(updateDisplay(displayName));
  };

  //Simulates :active css styling
  const toggleActiveClass = () => {
    const self = document.getElementById(displayName) as HTMLButtonElement;
    self.classList.add("active");
    setTimeout(() => self.classList.remove("active"), 200);
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      const upperCase = keyTrigger;
      const lowerCase = keyTrigger.toLowerCase();

      if (event.key === upperCase || event.key === lowerCase) {
        playSound();
        toggleActiveClass();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    // runs before the component is removed from the UI to prevent memory leaks
    return () => window.removeEventListener("keypress", handleKeyPress);
  });

  return (
    <button className="drum-pad" id={displayName} onClick={playSound}>
      {keyTrigger}
      <audio id={keyTrigger} className="clip" src={url}></audio>
    </button>
  );
};

export default connect()(DrumPadButton);
