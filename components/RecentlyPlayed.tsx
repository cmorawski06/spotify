import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RecentlyPlayed: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Ostatnio słuchane</Text>
            <View style={styles.songContainer}>
                <View style={styles.column}>
                    <View style={[styles.tile, { backgroundColor: '#302c2c' }]}>
                        <MaterialIcons name="music-note" size={24} style={styles.icon} />
                        <Text style={styles.text}>Song 1</Text>
                    </View>
                    <View style={[styles.tile, { backgroundColor: '#302c2c' }]}>
                        <MaterialIcons name="music-note" size={24} style={styles.icon} />
                        <Text style={styles.text}>Song 2</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={[styles.tile, { backgroundColor: '#302c2c' }]}>
                        <MaterialIcons name="music-note" size={24} style={styles.icon} />
                        <Text style={styles.text}>Song 3</Text>
                    </View>
                    <View style={[styles.tile, { backgroundColor: '#302c2c' }]}>
                        <MaterialIcons name="music-note" size={24} style={styles.icon} />
                        <Text style={styles.text}>Song 4</Text>
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
    icon: {
        marginRight: 8,
        color: '#FFF',
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
