import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import BottomNavigationBar from '../components/BottomNavigationBar';

const LibraryScreen: React.FC = () => {
  // Dane dla listy
  const data = [
    { id: 1, image: 'https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg', title: 'Polubione utwory', category: 'Playlista', description: '843 utwory' },
    { id: 2, image: 'https://media.istockphoto.com/id/1283532997/vector/podcast-concept-thin-line-icon-abstract-icon-abstract-gradient-background-modern-sound-wave.jpg?s=612x612&w=0&k=20&c=YLg7rHeSuYqeIuGRAcvf2a7J8X8Sx-IkmqYHXIJGPYQ=', title: 'Nowe odcinki', category: 'Podcast', description: 'Zaaktualizowano 19.05.2024' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKm0JdrHqVSJGuCr3DR9qsgIyv9QGhs6REw&s', title: 'Pliki lokalne', category: 'Playlista', description: '16 utworów' },
    // Dodaj więcej danych według potrzeb
  ];

  // Komponent pojedynczego elementu listy
  const ListItem: React.FC<{ item: { id: number; image: string; title: string; category: string; description: string } }> = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <BottomNavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  category: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default LibraryScreen;
