import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopNavigationBar: React.FC = () => {
  return (
    <View style={styles.topNavigationBar}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="settings" size={24} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topNavigationBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 0,
    padding: 15
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default TopNavigationBar;
