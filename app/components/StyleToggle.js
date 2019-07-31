import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch } from "native-base";
import { toggleDarkMode } from "../actions/appSettingsActions";

export function StyleToggle({ darkMode, toggleDarkMode }) {
  return <Switch value={darkMode} onValueChange={toggleDarkMode} />;
}

StyleToggle.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func
};

const mapStateToProps = ({ appSettings: { darkMode } }) => ({
  darkMode
});

const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => dispatch(toggleDarkMode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleToggle);
