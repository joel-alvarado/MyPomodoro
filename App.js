import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  const remainingTimeFormatted = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    // If seconds is less than 10, add a leading zero
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={{ marginBottom: 20 }}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={1500}
            colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          >
            {({ remainingTime, color }) => (
              <Text style={{ color, fontSize: 40 }}>
                {remainingTimeFormatted({ remainingTime })}
              </Text>
            )}
          </CountdownCircleTimer>
          <StatusBar style="auto" />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Pressable onPress={() => setIsPlaying(!isPlaying)} style={styles.timerButton}>
            <Text style={isPlaying ? styles.stopButton : styles.startButton}> {isPlaying ? 'Stop' : 'Start'}</Text>
          </Pressable>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  stopButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontSize: 20,
  },

});
