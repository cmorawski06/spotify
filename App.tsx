import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <>
      <Navigation/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF'
  }
});
