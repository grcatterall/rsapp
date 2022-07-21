import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';

import SwipeableModal from './Modal';
import cardStyles from '../assets/CardStyles';

const Dashboard = ({ route, navigation }) => {
  const { data } = route.params;

  console.log(data);
  
    const other = {
      'Clue Scrolls Total': data.bountyHunter,
      'Easy Clue Scroll': data.hardClueScrolls,
      'Medium Clue Scroll': data.lastManStanding,
      'Hard Clue Scroll': data.eliteClueScrolls,
      'Elite Clue Scroll': data.clueScrolls,
      'Master Clue Scroll': data.masterClueScrolls,
      'Lastman Standing': data.easyClueScrolls,
      'Bounty Hunter': data.easyClueScrolls,
      'Bounty Hunter Rogues': data.mediumClueScrolls,
    };
    const overallData = data.overall;
    //If object isn't a skill, remove it from the list
    Object.keys(data).map(function(key){
      !(data[key].level) &&
        delete data[key];
    })
    Object.keys(data).map(function(key){
      if(data[key].experience){  
        if(data[key].experience == -1){
          data[key].experience = 0;
        }
      }
    })
    Object.keys(other).map(function(key){
      (other[key].rank == -1) &&
        delete other[key];
    })
    Object.keys(data).map(function(key){
      if(data[key].rank == -1)
        data[key].rank = 'N/A';
    })
    delete data['overall'];
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.header}>Skills</Text>     
        </View>
          {Object.keys(data).map(function(key){
            data[key].name = key;
            return(
              <SwipeableModal data={data[key]} />
          );})}
        <View style={styles.row}>
               <Text style={styles.header}>Minigames</Text>     
        </View>
          {Object.keys(other).map(function(key){
            return(
              <View style={styles.card}>
                <View style={styles.row}>
                  <Text style={styles.defaultText} key={key}>{key}: </Text>
                  <Text style={styles.defaultLevel}>{other[key].score}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.defaultTextSmall}>Rank: </Text>
                  <Text style={styles.defaultTextSmall}>{other[key].rank}</Text>
                </View>
              </View>
          );})}
      </ScrollView>
       
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBCBA3',
    paddingLeft: 10,
    paddingRight: 10
  },
  row:{
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between'
  },
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
  header:{
    fontSize: 40,  
    margin: 8,
    fontWeight: 'bold'
  },
  defaultText:{
    color: 'black',
    fontSize: 28,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
  defaultLevel:{
    color: 'black',
    fontSize: 28,
    alignSelf: 'stretch',
    fontWeight: 'bold',
  },
  defaultTextSmall:{
    color: 'black',
    fontSize: 20,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
});

export default Dashboard;