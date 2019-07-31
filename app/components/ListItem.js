import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, CardItem, Body, Text, Icon, Left } from "native-base";
import { DarkModeStyle } from "../style";

export function ListItem({ name, description, stargazersCount, darkMode }) {
  return (
    <Card style={darkMode ? DarkModeStyle.listItem : null}>
      <CardItem style={darkMode ? DarkModeStyle.listItem : null}>
        <Body>
          <Text>{name}</Text>
          {description && <Text>{description}</Text>}
        </Body>
      </CardItem>
      <CardItem style={darkMode ? DarkModeStyle.listItem : null}>
        <Left>
          <Icon name="logo-github" />
          <Text>{stargazersCount} stars</Text>
        </Left>
      </CardItem>
    </Card>
  );
}

ListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stargazersCount: PropTypes.number,
  darkMode: PropTypes.bool
};

const mapStateToProps = ({ appSettings: { darkMode } }) => ({
  darkMode
});

export default connect(mapStateToProps)(ListItem);
