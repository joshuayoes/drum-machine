import { UPDATE_DISPLAY } from "../actionTypes";

interface Action {
  type: String;
  displayName: String;
}

const display = (state: any, action: Action) => {
  switch (action.type) {
    case UPDATE_DISPLAY:
      const { displayName }: Action = action;
      return { displayName };
    default:
      return state;
  }
};

export default display;
