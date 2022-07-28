import React, { Fragment, Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Button from '../Button';

import cardStyles from '../../assets/CardStyles';

import Modal from 'react-native-modal';

import Links from '../ModalLinks';
import Bar from '../ProgressBar';
import Remainder from '../RemainingXp';
import Icon from '../SkillIcon';

const SkillModal = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const modalSwipe = (e) => {
    if (e.swipeDirection == 'up' || e.swipeDirection == 'down') {
      closeModal();
    } else {
      closeModal;
    }
  }

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        backdropOpacity={0.4}
        swipeDirection={["up", "down", "left", "right"]}
        onSwipeComplete={(e) => modalSwipe(e)}
        onBackdropPress={closeModal}>
        <View style={styles.modalContainer}>
          <View style={[styles.modalHeader, cardStyles[data.skillKey]]}>
            <View
              style={{
                justifyContent: 'flex-end',
                flex: 1,
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeBtn}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.flexEnd]}>
              <Icon stat={data.skillKey} />
            </View>
            <View style={styles.modalHeaderContent}>
              <Text style={styles.header}>{data.skillName}</Text>
              <Bar xp={data.experience} level={data.level} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.modalInfo}>
              <Text style={styles.infoStat}>{data.level}</Text>
              <Text style={styles.description}>Level</Text>
            </View>
            <View style={styles.modalInfo}>
              <Text style={styles.infoStat}>{data.experience}</Text>
              <Text style={styles.description}>Exp</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.modalInfo}>
              <Text style={styles.infoStat}>{data.rank}</Text>
              <Text style={styles.description}>Rank</Text>
            </View>
            <View style={styles.modalInfo}>
              <Remainder level={data.level} xp={data.experience} />
              <Text style={styles.description}>Exp remaining</Text>
            </View>
          </View>
          <Links stat={data.skillKey} />
        </View>
      </Modal>

      <TouchableHighlight
        onPress={openModal}
        level={data.level}
        style={styles.skillBtn}>
        <Text>
          {data.skillName}, {data.level}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginHorizontal: -10,
    marginVertical: 40,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  description: {
    padding: 20,
    fontSize: 18,
    color: 'black',
  },
  header: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  closeBtn: {
    color: 'white',
    fontSize: 21,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  level: {
    width: 80,
    fontSize: 28,
    justifyContent: 'align-end',
    color: 'white',
    fontWeight: 'bold',
  },
  modalHeader: {
    width: '100%',
    height: 400,
    flex: 3,
    padding: 10,
    marginBottom: 30,
    // paddingBottom: 400
  },
  modalHeaderContent: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  modalInfo: {
    flex: 1,
    flexDirection: 'Column',
    alignItems: 'left',
  },
  infoStat: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  container: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 4,
    height: 150,
  },
  skillBtn: {
    flex: 1,
  },
});

export default SkillModal;
