import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import rootReducer from "./app/reducers";
import AppNavigator from "./app/navigation";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={handleError}
        onFinish={setLoading.bind(this, false)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppContainer style={styles.container} />
    </Provider>
  );
}

async function loadFonts() {
  await Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
  });
}

function handleError(error) {
  console.warn(error);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
