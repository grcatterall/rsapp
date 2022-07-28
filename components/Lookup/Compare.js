import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const Compare = ({ navigation, route }) => {
  const { searchData, userdata } = route.params;

  const styles = {
    flex: 2,
    width: 400,
    backgroundColor: 'red',
    height: 600,
  };

  const renderComp = (value) => {
    console.log(value);
  };

  const names = [searchData.name, userdata.name];

  return (
    <View style={{ width: '100%' }}>
      <View style={{ width: '100%', flexDirection: 'row' }}>
        {names.map((name) => (
          <View style={{ width: '50%' }}>
            <Text style={{ textAlign: 'center' }}>{name}</Text>
          </View>
        ))}
      </View>

      <ScrollView>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ width: '50%' }}>
            {searchData.skills.map((skill) => {
              return (
                <View
                  style={{
                    padding: 10,
                    backgroundColor: 'green',
                    flexDirection: 'row',
                  }}>
                  <Text style={{ width: '50%' }}>{skill.skillName}</Text>
                  <Text style={{ width: '50%', textAlign: 'right' }}>
                    {skill.level}
                  </Text>
                </View>
              );
            })}
          </View>

          <View style={{ width: '50%' }}>
            {userdata.skills.map((skill) => {
              return (
                <View
                  style={{
                    padding: 10,
                    backgroundColor: 'green',
                    flexDirection: 'row',
                  }}>
                  <Text style={{ width: '50%' }}>{skill.level}</Text>
                  <Text style={{ width: '50%', textAlign: 'right' }}>
                    {skill.skillName}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Compare;
