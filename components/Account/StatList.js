import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import FormatUserData from '../../services/FormatUserData';
import SkillModal from './SkillModal';

const styles = {
  flex: 2,
  // marginHorizontal: "auto",
  width: 400,
  backgroundColor: "red",
  // padding:  20,
  height: 600
};

const StatList = ({ data }) => {
  const { skills, other } = FormatUserData(data);

  return (
    <FlatGrid
      itemDimension={130}
      data={skills}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <SkillModal data={item} />
      )}
    />
  );
}

export default StatList;