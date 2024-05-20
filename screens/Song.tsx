import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';

const Song: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPausePress = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <LinearGradient
            colors={['#000', '#444', 'rgba(0, 0.8, 0.8, 1)']}
            style={styles.container}
        >
            <ImageBackground
                source={{ uri: 'https://c.saavncdn.com/142/Harry-Pothed-English-2022-20221009060506-500x500.jpg' }}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
                    style={styles.gradient}
                />
                <View>
                    <Text style={[styles.header, { marginTop: 12 }]}>ODTWARZANE ZE STRONY WYKONAWCY</Text>
                    <Text style={[styles.header, { fontWeight: 'bold' }]}>MOBBYN</Text>
                </View>
                <View style={styles.bottomSection}>
                    <View style={styles.songInfoContainer}>
                        <Image
                            source={{ uri: 'https://c.saavncdn.com/142/Harry-Pothed-English-2022-20221009060506-500x500.jpg' }}
                            style={styles.songImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.songTitle}>Harry Pothed</Text>
                            <Text style={styles.songArtist}>MOBBYN</Text>
                        </View>
                    </View>
                    <View style={styles.progressContainer}>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#FFF"
                            maximumTrackTintColor="#AAA"
                            thumbTintColor="#FFF"
                        />
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>0:00</Text>
                            <Text style={styles.timeText}>2:22</Text>
                        </View>
                    </View>
                    <View style={styles.controlsContainer}>
                        <TouchableOpacity>
                            <MaterialIcons name="shuffle" size={36} style={styles.controlIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="skip-previous" size={36} style={styles.controlIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePlayPausePress}>
                            <MaterialIcons
                                name={isPlaying ? "pause-circle-filled" : "play-circle-filled"}
                                size={72}
                                style={styles.controlIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="skip-next" size={36} style={styles.controlIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="repeat" size={32} style={styles.controlIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        textAlign: 'center',
        color: '#FFF',
        margin: 2,
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '95%',
    },
    songInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    songImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    songTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    songArtist: {
        fontSize: 16,
        color: '#AAA',
    },
    progressContainer: {
        paddingHorizontal: 16,
        marginTop: 16,
    },
    slider: {
        width: '100%',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    timeText: {
        color: '#FFF',
        fontSize: 12,
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20,
    },
    controlIcon: {
        color: '#FFF',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '110%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});

export default Song;
