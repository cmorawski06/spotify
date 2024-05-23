import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Zdefiniuj typy nawigacji dla Twoich ekranów
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;
type LibraryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Library'>;

// Zdefiniuj typ RootStackParamList
type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

const BottomNavigationBar: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp | SearchScreenNavigationProp | LibraryScreenNavigationProp>();
  const route = useRoute();
  const [activeScreen, setActiveScreen] = useState<keyof RootStackParamList>('Home'); // Początkowo ustawiamy aktywny ekran jako 'Home'

  const goToScreen = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName); // Nawigujemy do klikniętego ekranu
  };

  useEffect(() => {
    // Pobieramy nazwę aktualnie wyświetlanego ekranu z trasy
    const currentRouteName = route.name as keyof RootStackParamList;
    setActiveScreen(currentRouteName);
  }, [route]);

  return (
    <View style={styles.bottomNavigationBar}>
      <TouchableOpacity onPress={() => goToScreen('Home')} style={styles.iconContainer}>
        <MaterialIcons name="home" size={24} style={[styles.icon, activeScreen === 'Home' && styles.activeIcon]} />
        <Text style={[styles.iconText, activeScreen === 'Home' && styles.activeText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen('Search')} style={styles.iconContainer}>
        <MaterialIcons name="search" size={24} style={[styles.icon, activeScreen === 'Search' && styles.activeIcon]} />
        <Text style={[styles.iconText, activeScreen === 'Search' && styles.activeText]}>Wyszukaj</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToScreen('Library')} style={styles.iconContainer}>
        <MaterialIcons name="library-music" size={24} style={[styles.icon, activeScreen === 'Library' && styles.activeIcon]} />
        <Text style={[styles.iconText, activeScreen === 'Library' && styles.activeText]}>Biblioteka</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigationBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
  activeIcon: {
    color: '#5abc62', // Kolor ikony dla aktywnego ekranu
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
  },
  activeText: {
    color: '#5abc62', // Kolor tekstu dla aktywnego ekranu
  },
});

export default BottomNavigationBar;
