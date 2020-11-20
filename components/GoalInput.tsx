import React from 'react'
import { StyleSheet, Button, TextInput, View } from 'react-native'

type GoalInputProps = {
    newGoal: string;
    setNewGoal: (text: string) => void;
    handleAddGoal: () => void;
}

const GoalInput = ({ newGoal, setNewGoal, handleAddGoal }: GoalInputProps) => {
    return (
        <View>
            <TextInput onChangeText={(text) => setNewGoal(text)} value={newGoal} style={styles.input} placeholder="Course Goal" />
            <Button onPress={() => handleAddGoal()} title="ADD" />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
})
