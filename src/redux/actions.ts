import { UPDATE_DISPLAY } from "./actionTypes";

const updateDisplay = (displayName: string) => ({
  type: UPDATE_DISPLAY,
  displayName
});

export { updateDisplay };
