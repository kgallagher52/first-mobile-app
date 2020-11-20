import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import GoalInput from './components/GoalInput';
import SwipeRow from './components/SwipeRow';

type Item = {
  id: string;
  value: string;
}
const App = () => {
  const [newGoal, setNewGoal] = useState<string>('');
  const [goals, setGoals] = useState<Item[]>([]);

  const handleAddGoal = () => {
    setGoals(goals => [
      ...goals,
      { id: Math.random().toString(), value: newGoal }
    ])
    setNewGoal('');
  }

  const handleRemoveGoal = (id: string) => {
    setGoals(goals => {
      return goals.filter((goal) => goal.id !== id)
    })
  }

  const renderItem = ({ item }: any) => (
    <SwipeRow
      key={item.id}
      item={item}
      swipeThreshold={-150}
      onSwipe={() => handleRemoveGoal(item.id)}
    >
      <View style={styles.goal} >
        <Text style={styles.text}>{item.value}</Text>
      </View>
    </SwipeRow>
  )
  return (
    <View style={styles.container}>
      <GoalInput newGoal={newGoal} setNewGoal={setNewGoal} handleAddGoal={handleAddGoal} />
      <FlatList
        data={goals}
        renderItem={renderItem}
      />
    </View>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  goal: {
    backgroundColor: 'teal',
    padding: 16,
    borderRadius: 3,
    width: '100%',
    marginTop: 12,
    marginBottom: 12
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  }
});
