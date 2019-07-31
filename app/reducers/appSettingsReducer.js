import * as actions from "../actions/appSettingsActions";

const initialState = {
  darkMode: false
};

export default function appSettings(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}
