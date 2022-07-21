import React, { Fragment, Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Button from "./Button";

import Modal from "react-native-modal";

import cardStyles from '../assets/CardStyles';

import Links from "./ModalLinks";
import Bar from "./ProgressBar";
import Remainder from "./RemainingXp";
import Icon from './SkillIcon';

class SwipeableModal extends Component {
  state = {
    visible: false
  };


  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {
  const data = this.props.data;
    return (
      <Fragment style={styles.mainContainer}>
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.4}
          swipeDirection="left"
          onSwipeComplete={this.closeModal}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.modalHeader, cardStyles[data.name]]}>
              <View style={{justifyContent: 'flex-end', flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={this.closeModal}
                >
                  <Text style={styles.closeBtn}>X</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.row, styles.flexEnd]}>
                <Icon stat={data.name}/>
              </View>
              <View style={styles.modalHeaderContent}>
                <Text style={styles.header}>
                  {data.name.toUpperCase()}
                </Text>
                <Bar xp={data.experience} level={data.level}/>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.modalInfo}>
                <Text style={styles.infoStat}>
                  {data.level}
                </Text>
                <Text style={styles.description}>
                  Level
                </Text>
              </View>
              <View style={styles.modalInfo}>
                <Text style={styles.infoStat}>
                  {data.experience}
                </Text>
                <Text style={styles.description}>
                  Exp
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.modalInfo}>
                <Text style={styles.infoStat}>
                  {data.rank}
                </Text>
                <Text style={styles.description}>
                  Rank 
                </Text>
              </View>
              <View style={styles.modalInfo}>
                <Remainder level={data.level} xp={data.experience} />
                <Text style={styles.description}>
                  Exp remaining 
                </Text>
              </View>
            </View>
            <Links stat={data.name}/>            
          </View>
        </Modal>

        <Button
          label={data.name}
          onPress={this.openModal}
          level={data.level}

        />
      </Fragment>
    );
  }
}

export default SwipeableModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginHorizontal: -10,
    marginVertical: 40,
    backgroundColor: 'white',
    flexDirection:'column',
  },
  description: {
    padding: 20,
    fontSize: 18,
    color: 'black'
  },
  header:{
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 30
  },
  closeBtn:{
    color: 'white',
    fontSize: 21,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',    
  },
  row:{
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  level:{
    width: 80,
    fontSize: 28,
    justifyContent: 'align-end',
    color: 'white',
    fontWeight: 'bold',
  },
  modalHeader:{
    width: '100%',
    height: 400,
    flex: 3,
    padding: 10,
    marginBottom: 30
    // paddingBottom: 400
  },
  modalHeaderContent:{
    flex:1,
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  modalInfo:{
    flex:1,
    flexDirection:'Column',
    alignItems: 'left',
  },
  infoStat:{
    fontSize: 24,
    fontWeight:'bold'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  }
});