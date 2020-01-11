import React from "react";

interface Props {
  keyCode: number;
  keyTrigger: string;
  displayName: string;
  url: string;
}

const DrumPadButton: React.FC<Props> = ({
  keyCode,
  keyTrigger,
  displayName,
  url
}) => {
  let playSound = () => {
    let audio = document.getElementById(keyTrigger) as HTMLAudioElement;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <button className="drum-pad" id={displayName} onClick={playSound}>
      {keyTrigger}
      <audio id={keyTrigger} className="clip" src={url}></audio>
    </button>
  );
};

export default DrumPadButton;
