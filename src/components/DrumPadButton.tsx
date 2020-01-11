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
  return (
    <button className="drum-pad" id={displayName}>
      {keyTrigger}
      <audio src={url} className="clip" id={keyTrigger}></audio>
    </button>
  );
};

export default DrumPadButton;
