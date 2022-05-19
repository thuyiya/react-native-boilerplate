import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Screen: Home</Text>

    <TouchableHighlight onPress={() => navigation.navigate("Login")}>
      <Text>Go to Login</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
