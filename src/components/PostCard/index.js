import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
  Modal,
  StyleSheet,
} from "react-native";
import { Colors } from "../../config/";


export const CardComponent = ({
  onPress,
  item,
}) => {

    

  return (
    <TouchableOpacity style = {styles.cardContainer}>
        <View style = {{marginTop: 20,marginHorizontal: 10}}>
            <Text style = {styles.fontBold}>User Name:</Text>
            <Text style={styles.fontBold}>Description:</Text>
            <Text>{item.title}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer : {
    height: 180,
    width: '100%',
    backgroundColor: Colors.Secondary,
    borderRadius: 30,
    marginVertical: 10,
    alignSelf: 'center'
  },
  fontBold: {
      fontWeight: 'bold'
  },

});
