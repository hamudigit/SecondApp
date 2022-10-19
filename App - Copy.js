import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! Welcome to my Second Application</Text>
      <Text>This is my First Line of Code in React Native</Text>
      <Text>This my Second Line of Code in React Native</Text>
      <Text>Thank You an Welcome</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff77',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
