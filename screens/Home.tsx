import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopNavigationBar from '../components/TopNavigationBar';
import BottomNavigationBar from '../components/BottomNavigationBar';
import NewRelease from '../components/NewRelease';
import RecentlyPlayed from '../components/RecentlyPlayed';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <TopNavigationBar/>
      <RecentlyPlayed/>
      <NewRelease/>
      <BottomNavigationBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    },
});

export default Home;
