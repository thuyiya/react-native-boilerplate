import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

const AboutScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Screen: About</Text>

    <TouchableHighlight onPress={() => navigation.navigate("Home")}>
      <Text>Go to Home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

AboutScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AboutScreen;
