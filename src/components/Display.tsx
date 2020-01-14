import React from "react";
import { connect } from "react-redux";

interface Props {
  displayName: string;
}

const Display: React.FC<Props> = ({ displayName }) => {
  return <section id="display">{displayName}</section>;
};

const mapStateToProps = (state: { displayName: string }) => {
  const { displayName } = state;
  return { displayName };
};

export default connect(mapStateToProps)(Display);
