import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Remainder = ({level, xp}) => (
  <View>
    <Text style={styles.infoStat}>{xpNeeded(level) - parseInt(xp)}</Text>
  </View>
);

export default Remainder;

function xpNeeded(level){
  var points = 0;
if(level != 99){
    for(var lvl = 1; lvl <= level; lvl++){
      points += Math.floor(lvl + 300 * Math.pow(2, lvl / 7.));
    }
    return Math.floor(points/4);
  }else{
    return 200000000;
  }
}

const styles = StyleSheet.create({
  infoStat:{
    fontSize: 24,
    fontWeight:'bold'
  },
});