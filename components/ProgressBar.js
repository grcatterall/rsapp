import React, { Component } from "react";
import * as Progress from 'react-native-progress';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";

const Bar = ({xp, level}) => (
  <View>
    <Progress.Bar progress={percentageComplete(xp, level)} width={200} color="#FFFFFF" borderColor="#FFFFFF"  />
    <Text style={styles.progressText}>{xp}xp / {xpNeeded(level)}xp</Text> 
  </View>
);

export default Bar;

function xpNeeded(level){
  var points = 0;
  if(level != 99){
    for (var lvl = 1; lvl <= level; lvl++){
      points += Math.floor(lvl + 300 * Math.pow(2, lvl / 7.));
    }
    return Math.floor(points/4);
  } else {
    return 200000000;
  }
}

function percentageComplete(xp, level){
  let targetXp = xpNeeded(level);

  if(level == 99) 
    targetXp = 200000000;


  return 1 - (((targetXp - xp) / targetXp) * 10);
}

const styles = StyleSheet.create({
  progressText:{
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 15
  }
});