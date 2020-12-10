import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
} from "react-native";


const HomeScreen = ({ params }) => {


  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
        <View>
            <Text>APP IS RUNNING!!!!</Text>
        </View>
    </ScrollView>
  );
};

export default HomeScreen;
