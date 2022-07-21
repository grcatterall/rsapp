import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import cardStyles from '../assets/CardStyles';

  const Button = ({ onPress, label, level }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, cardStyles[label]]}
    >
      <View style={styles.row, styles.mainRow}>
        <Text style={styles.text}>{label.toUpperCase()} </Text>
        <Text style={styles.level}>{level}</Text>
      </View>
    </TouchableOpacity>
  );

export default Button;

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',
    borderRadius: 12,
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'column',
    margin: 4,
    padding: 8,
    fontFamily: 'Arial-BoldMT',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 1,
    marginTop: 10
  },
  text:{
    color: 'white',
    fontSize: 28,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
  row:{
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'row',
    marginTop: 4
  },
  level:{
    width: 80,
    fontSize: 28,
    justifyContent: 'align-end',
    color: 'white',
    fontWeight: 'bold',
  },
  mainRow:{
    fontSize: 38,
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 6,
    fontWeight: 'bold'
  },
});