import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Draggable from 'react-native-draggable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PersonFactory from './src/components/PersonFactory.js';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
    <Draggable isCircle={true} renderColor='black' x={300} y={200} renderText="This is draggable?"/>
    <PersonFactory></PersonFactory>
    <View>

      <Draggable isCircle={true} renderColor='black' x={200} y={200} renderText="This is draggable?"/>
      <StatusBar style="auto" />
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
