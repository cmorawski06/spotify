import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RecentlyPlayed: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Ostatnio słuchane</Text>
            <View style={styles.songContainer}>
                <View style={styles.column}>
                    <View style={[styles.tile, { backgroundColor: '#302c2c' }]}>
                        <Image
                            source={{ uri: 'https://pub-static.fotor.com/assets/projects/pages/c7d9749a29fc44a5a54da2bba21165af/gradient-cool-new-bullet-e52b9cac8825471981dc12dd343176da.jpg' }} // Podaj odpowiedni link do obrazu
                            style={styles.image}
                        />
                        <Text style={styles.text}>Jazz</Text>
                    </View>
                    <View style={[styles.tile, { backgroundColor: '#302c2c' }]}>
                        <Image
                            source={{ uri: 'https://archive.org/download/spotify_202008/spotify.jpg' }} // Podaj odpowiedni link do obrazu
                            style={styles.image}
                        />
                        <Text style={styles.text}>☠️☠️☠️</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={[styles.tile, { backgroundColor: '#302c2c' }]}>
                        <Image
                            source={{ uri: 'https://cdn.dribbble.com/users/905938/screenshots/3441423/attachments/754775/cover-4.jpg?resize=400x300&vertical=center' }} // Podaj odpowiedni link do obrazu
                            style={styles.image}
                        />
                        <Text style={styles.text}>Rap</Text>
                    </View>
                    <View style={[styles.tile, { backgroundColor: '#302c2c' }]}>
                        <Image
                            source={{ uri: 'https://static.independent.co.uk/2023/11/29/15/LOCKUP-LAVENDER.jpg?width=1200&height=1200&fit=crop' }} // Podaj odpowiedni link do obrazu
                            style={styles.image}
                        />
                        <Text style={styles.text}>Wrapped</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        margin: 16,
        alignItems: 'flex-start',
    },
    songContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch', // Rozciągnij elementy wzdłuż osi krótkiej
    },
    tile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 8, // Dodanie wewnętrznego wypełnienia dla kafelków
        borderRadius: 8, // Opcjonalnie: Dodanie zaokrąglonych krawędzi dla kafelków
        flexGrow: 1, // Rozciągaj kafelki na maksymalną szerokość
    },
    image: {
        width: 40, // Szerokość obrazu
        height: 40, // Wysokość obrazu
        marginRight: 8,
        borderRadius: 5, // Opcjonalnie: Dodanie zaokrąglonych krawędzi dla obrazów
    },
    text: {
        fontSize: 24,
        color: '#FFF',
    },
    header: {
        fontSize: 36,
        color: '#FFF',
        marginBottom: 16,
    }
});

export default RecentlyPlayed;
