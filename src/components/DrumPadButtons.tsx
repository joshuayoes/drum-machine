import React from "react";
import DrumPadButton from "./DrumPadButton";
import drumKeys from "../drumKeys";

const DrumPadButtons: React.FC = () => {
  const listDrumPadButtons = drumKeys.map((drumKey, idx) => (
    <DrumPadButton
      key={drumKey.keyTrigger}
      keyCode={drumKey.keyCode}
      keyTrigger={drumKey.keyTrigger}
      displayName={drumKey.displayName}
      url={drumKey.url}
    />
  ));

  return <section> {listDrumPadButtons} </section>;
};

export default DrumPadButtons;
