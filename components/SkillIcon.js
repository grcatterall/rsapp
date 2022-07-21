import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import * as Constants from '../lib/constants';

const Icon = ({stat}) => ( 
  <View style={styles.iconContainer}>
    <Image source={{uri: 'https://vignette.wikia.nocookie.net/2007scape/images/' + Constants.Skills.links.find(item => item.id == stat).imgPath}}
    style={styles.icon}
    />
  </View>
)

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 70,
    height: 70,
    width: 70,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 1)',
    float: 'right'
  },
  icon: {
    position: 'relative',
    bottom: 15,
    right: 6,
    height: 80,
    width: 80
  }
})