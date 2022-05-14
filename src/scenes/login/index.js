import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

const LoginScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => navigation.navigate("Home")}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
