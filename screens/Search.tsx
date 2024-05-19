import React from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomNavigationBar from '../components/BottomNavigationBar';

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <MaterialIcons name="search" size={24} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Czego chcesz poszukać?"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Przeglądaj wszystko</Text>
      </View>
      <View style={styles.tileContainer}>
        <View style={[styles.tile, { backgroundColor: '#FF5733' }]}>
          <Text style={styles.tileText}>Muzyka</Text>
          <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5WeaTqEHOa_p2OmZbdWjrEsB6_epR4Jg9Q&s' }} style={styles.tileImage} />
        </View>
        <View style={[styles.tile, { backgroundColor: '#33FF86' }]}>
          <Text style={styles.tileText}>Podcasty</Text>
          <ImageBackground source={{ uri: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2021/03/spotify-podcasts.png' }} style={styles.tileImage} />
        </View>
        <View style={[styles.tile, { backgroundColor: '#339CFF' }]}>
          <Text style={styles.tileText}>Wydarzenia na żywo</Text>
          <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kLLNHAnBK_nxznbblW6Y7eQHrIaibkJMQdj2RlZEmQ&s' }} style={styles.tileImage} />
        </View>
        <View style={[styles.tile, { backgroundColor: '#FFC300' }]}>
          <Text style={styles.tileText}>Przygotowane dla Ciebie</Text>
          <ImageBackground source={{ uri: 'https://pbs.twimg.com/media/F5bmzxXbYAETzsd.png:large' }} style={styles.tileImage} />
        </View>
        {/* Dodaj więcej kafelków według potrzeb */}
      </View>
      <BottomNavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  header: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    margin: 20,
    backgroundColor: '#FFF',
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    color: '#999',
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  tile: {
    width: '45%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  tileText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 1,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  tileImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
  },
});

export default SearchScreen;
