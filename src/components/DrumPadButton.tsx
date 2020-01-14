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
  let playSound = () => {
    let audio = document.getElementById(keyTrigger) as HTMLAudioElement;
    audio.currentTime = 0;
    audio.play();
    dispatch(updateDisplay(displayName));
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === keyTrigger || event.key === keyTrigger.toLowerCase()) {
        playSound();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

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
