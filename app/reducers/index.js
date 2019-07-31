import { combineReducers } from "redux";
import repos from "./reposReducer";
import appSettings from "./appSettingsReducer";

export default (rootReducer = combineReducers({
  repos,
  appSettings
}));
