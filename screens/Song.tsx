import React, { useEffect, useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';
import { reloadAppAsync } from 'expo';

const Song: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [duration, setDuration] = useState<number>(0);
    const [position, setPosition] = useState<number>(0);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [shuffle, setShuffle] = useState<boolean>(false);
    const [repeat, setRepeat] = useState<boolean>(false);
    const [selectedIcon, setSelectedIcon] = useState<string[]>([]);
    const [forceUpdate, setForceUpdate] = useState<number>(0); // Dodaj stan do re-renderowania komponentu

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../MOBBYN - HARRY POTHED.mp3')
      );
      setSound(sound);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (!isReady && status.isLoaded && status.durationMillis) {
            setIsReady(false)
            setDuration(status.durationMillis)
        }
        if (status.isPlaying && status.positionMillis !== undefined) {
            setPosition(status.positionMillis)
        }
      });
    };

    loadSound();

    return stopMusicOnUnmount
  }, [isReady]); // Dodaj isReady jako zależność

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
        interval = setInterval(() => {
            if (sound) {
                sound.getStatusAsync().then(status => {
                    if (status.isPlaying && status.positionMillis !== undefined) {
                        setPosition(status.positionMillis)
                    }
                })
            }
        }, 1000)
    }

    return () => clearInterval(interval);
  }, [isPlaying, sound]);

  const stopMusicOnUnmount = () => {
    if (sound) {
        sound.stopAsync(); // Zatrzymaj odtwarzanie muzyki
        sound.unloadAsync();
    }
};

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
    if (sound && duration) {
      const newPosition = value * duration;
      await sound.setPositionAsync(newPosition);
      setPosition(newPosition);
    }
  };

  const handleSkipPrevious = async () => {
    await sound?.setPositionAsync(0);
  }

  const handleSkipNext = async () => {
    await sound?.setPositionAsync(0);
  }

  const handleShuffleAndRepeat = () => {
    setForceUpdate(prev => prev + 1);
  }

  const handleShuffle = async (id: string) => {
    setShuffle(!shuffle)
    if(shuffle) {
        selectedIcon.push(id);
    } else {
        selectedIcon.splice(selectedIcon.indexOf(id))
    }
  }

  const handleRepeat = async (id: string) => {
    setRepeat(!repeat)
    if(repeat) {
        selectedIcon.push(id)
    } else {
        selectedIcon.splice(selectedIcon.indexOf(id))
    }
  }

  const formatTimeToDisplay = (time: number): string => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
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
              maximumValue={(duration) / 160000}
              minimumTrackTintColor="#FFF"
              maximumTrackTintColor="#AAA"
              thumbTintColor="#FFF"
              value={position / (duration)}
              onSlidingComplete={handleSeek}
            />
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{formatTimeToDisplay(position)}</Text>
              <Text style={styles.timeText}>{formatTimeToDisplay(duration)}</Text>
            </View>
          </View>
          <View style={styles.controlsContainer}>
            <TouchableOpacity onPress={() => handleShuffle('shuffle')}>
              <MaterialIcons name="shuffle" size={36} style={selectedIcon.includes('shuffle') ? styles.controlIconClicked : styles.controlIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkipPrevious}>
              <MaterialIcons name="skip-previous" size={36} style={styles.controlIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlayPausePress}>
              <MaterialIcons
                name={isPlaying ? "pause-circle-filled" : "play-circle-filled"}
                size={72}
                style={styles.controlIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkipNext}>
              <MaterialIcons name="skip-next" size={36} style={styles.controlIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRepeat('repeat')}>
              <MaterialIcons name="repeat" size={32} style={selectedIcon.includes('repeat') ? styles.controlIconClicked : styles.controlIcon} />
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
  controlIconClicked: {
    color: '#5abc62',
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
