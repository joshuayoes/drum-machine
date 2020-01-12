import React, { useEffect } from "react";

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

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === keyTrigger.toLowerCase()) {
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

export default DrumPadButton;
