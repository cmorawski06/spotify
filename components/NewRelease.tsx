import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewRelease: React.FC = () => {
    const navigation = useNavigation();

    const handleNewReleasePress = () => {
        navigation.navigate("Song")
    };

    return (
        <View style={styles.container}>
            <View style={styles.artistContainer}>
                <Image source={{ uri: 'https://i.ytimg.com/vi/ofLQbRoL74c/sddefault.jpg' }} style={styles.artistImage} />
                <View style={styles.artistTextContainer}>
                    <Text style={styles.subtitle}>Nowe wydanie wykonawcy</Text>
                    <Text style={styles.title}>MOBBYN</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleNewReleasePress}>
                <View style={styles.newRelease}>
                    <Image source={{ uri: 'https://c.saavncdn.com/142/Harry-Pothed-English-2022-20221009060506-500x500.jpg' }} style={styles.image} />
                    <View style={styles.contentContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Harry Pothed</Text>
                            <Text style={styles.subtitle}>MOBBYN</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <MaterialIcons name="playlist-add" size={30} style={styles.icon} />
                            <MaterialIcons name="play-circle" size={30} style={styles.icon} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        margin: 16,
        alignItems: 'flex-start',
    },
    artistContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    artistImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 16,
    },
    artistTextContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#AAA',
    },
    newRelease: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#302c2c',
        marginBottom: 16,
        padding: 8,
        borderRadius: 8,
        width: '100%',
        height: 200,
    },
    image: {
        width: '50%',
        height: '100%',
        marginRight: 8,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', // Rozdzielenie textContainer i iconContainer
        padding: 8,
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start', // Ustaw tekst na lewą stronę
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        color: '#FFF',
    },
    toast: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 5,
        backgroundColor: '#222',
        elevation: 6,
        width: '90%',
        height: 75
    },
    toastImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    toastTextContainer: {
        flexDirection: 'column',
    },
    toastHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    toastDescription: {
        fontSize: 14,
        color: '#FFF',
    },
    additionalStyle: {
        gap: 8,
    },
    progressBar: {
        height: 5,
        backgroundColor: '#5abc62', // Kolor paska postępu
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    play: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
});

export default NewRelease;
