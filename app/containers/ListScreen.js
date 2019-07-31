import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { List, Spinner } from "native-base";
import { ListItem, HeaderTitle } from "../components";
import { ListScreenStyle, DarkModeStyle } from "../style";

export function ListScreen({ repos, isFetching, darkMode }) {
  return (
    <View
      style={[
        ListScreenStyle.container,
        darkMode ? DarkModeStyle.container : null
      ]}
    >
      {isFetching && <Spinner />}
      {!isFetching && !repos.length && (
        <Text
          style={[
            ListScreenStyle.noFound,
            darkMode ? DarkModeStyle.textColor : null
          ]}
        >
          No repos found
        </Text>
      )}
      <List
        dataArray={repos}
        renderRow={renderListItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

function renderListItem({ name, description, stargazers_count }) {
  return (
    <ListItem
      name={name}
      stargazersCount={stargazers_count}
      description={description}
    />
  );
}

const keyExtractor = item => `${item.id}`;

const mapStateToProps = ({
  repos: { repos, isFetching },
  appSettings: { darkMode }
}) => ({
  repos,
  isFetching,
  darkMode
});

ListScreen.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      stargazers_count: PropTypes.number
    })
  ),
  isFetching: PropTypes.bool,
  darkMode: PropTypes.bool
};

ListScreen.navigationOptions = {
  headerTitle: <HeaderTitle title="Github List" />
};

export default connect(mapStateToProps)(ListScreen);
