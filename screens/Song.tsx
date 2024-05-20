import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';

const Song: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [position, setPosition] = useState<number>(0);
    const [isSeeking, setIsSeeking] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);

    useEffect(() => {
        const loadSound = async () => {
            const { sound, status } = await Audio.Sound.createAsync(
                require('../MOBBYN - HARRY POTHED.mp3')
            );
            setSound(sound);
            sound.playAsync();
            setDuration(status.durationMillis || 0);
            sound.setOnPlaybackStatusUpdate((status) => {
                if (status.isPlaying) {
                    setPosition(status.positionMillis / status.durationMillis);
                    setCurrentTime(status.positionMillis);
                }
            });
        };

        loadSound();

        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    const handlePlayPausePress = async () => {
        if (sound) {
            if (isPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = async (value: number) => {
        if (sound) {
            await sound.setPositionAsync(value * duration);
            setPosition(value);
        }
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
                            value={position}
                            onSlidingStart={() => setIsSeeking(true)}
                            onSlidingComplete={(value) => {
                                setIsSeeking(false);
                                handleSeek(value);
                            }}
                        />
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                            <Text style={styles.timeText}>{formatTime(duration)}</Text>
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

export default Song