import React from "react";
import { createStackNavigator } from "react-navigation";
import { InputScreen, ListScreen } from "../containers";
import { StyleToggle } from "../components";

const AppNavigatior = createStackNavigator(
  {
    Home: InputScreen,
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerRight: <StyleToggle />,
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#4e76ea"
      }
    }
  }
);

export default AppNavigatior;
