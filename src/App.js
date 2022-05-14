import React from "react";
import { View, StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Config from "react-native-config";
import Main from "./main";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  // eslint-disable-next-line no-undef
  console.log(Config.API_TOKEN);

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Main />
    </View>
  );
};

export default App;
