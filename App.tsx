import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [outPutText, setOutPutText] = useState<string>('My First App');
  return (
    <View style={styles.container}>
      <Text>{outPutText}</Text>
      <StatusBar style="auto" />
      <Button title="Change Text" onPress={() => setOutPutText('You changed the text!')} />
    </View>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
