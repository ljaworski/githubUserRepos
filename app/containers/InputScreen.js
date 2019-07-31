import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View } from "react-native";
import { Button, Input, HeaderTitle } from "../components";
import { fetchRepos } from "../actions/reposActions";
import { InputScreenStyle, DarkModeStyle } from "../style";

export function InputScreen({ navigation, fetchGithubRepos, darkMode }) {
  const [username, setUsername] = useState("");
  const getRepos = () => {
    if (username.length) {
      setUsername("");
      fetchGithubRepos(username);
      navigation.navigate("List");
    }
  };
  return (
    <View
      style={[
        InputScreenStyle.container,
        darkMode ? DarkModeStyle.container : null
      ]}
    >
      <View style={InputScreenStyle.input}>
        <Input
          onChange={setUsername}
          value={username}
          placeholder="Github username"
          style={darkMode ? DarkModeStyle.input : null}
        />
      </View>
      <Button
        label="Find most successful repository"
        onPress={getRepos}
        disabled={false}
        style={InputScreenStyle.button}
      />
    </View>
  );
}

InputScreen.navigationOptions = {
  headerTitle: <HeaderTitle title="Github Input" />
};

InputScreen.propTypes = {
  darkMode: PropTypes.bool,
  fetchGithubRepos: PropTypes.func
};

const mapStateToProps = ({ appSettings: { darkMode } }) => ({
  darkMode
});

const mapDispatchToProps = dispatch => ({
  fetchGithubRepos: username => dispatch(fetchRepos(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputScreen);
