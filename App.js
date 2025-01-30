import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Provider as PaperProvider, Button, Modal, Portal } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import customTheme from './theme';
import ExerciseInput from './components/ExerciseInput';
import Summary from './components/Summary';
import ExerciseListModal from './components/ExerciseListModal';
import styles from './styles/styles';

export default function App() {
  // State to manage the visibility of exercise input modal
  const [modalVisible, setModalVisible] = useState(false);
  // State to manage the visibility of the exercise list modal
  const [exerciseListVisible, setExerciseListVisible] = useState(false);
  // State to store added exercises
  const [exercises, setExercises] = useState([]);

  /**
   * Adds a new exercise to the list and closes the modal.
   * @param {Object} exercise - The exercise object containing details.
   */
  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
    setModalVisible(false); // Close modal after adding exercise
  };

  // Get the last added exercise (if any)
  const lastExercise = exercises[exercises.length - 1];

  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaView style={styles.container}>
        
        {/* Empty space at the top for layout */}
        <View style={styles.emptySpace} />

        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello Username</Text>
          <View style={styles.icons}>
            <Ionicons name="settings-outline" size={24} color="black" style={styles.icon} />
            <Ionicons name="person-outline" size={24} color="black" />
          </View>
        </View>

        <View style={styles.emptySpace} />

        {/* Last Exercise Card */}
        <View style={styles.lastExerciseCard}>
          <View style={styles.lastExerciseInfo}>
            {/* Exercise Statistics */}
            <View style={styles.exerciseStats}>
              <Text style={styles.exerciseStatText}>
                <FontAwesome name="arrow-circle-right" size={24} color="white" /> {lastExercise ? lastExercise.distance : 0} km
              </Text>
              <Text style={styles.exerciseStatText}>
                <MaterialCommunityIcons name="clock-time-eight-outline" size={24} color="white" /> {lastExercise ? lastExercise.duration : 0} min
              </Text>
              <Text style={styles.exerciseStatText}>
                <Ionicons name="flame-sharp" size={24} color="white" /> 
                {lastExercise ? Math.round(lastExercise.caloriesBurned) : 0} kcal
              </Text>
            </View>
            {/* Exercise Type Display */}
            <View style={styles.exerciseTypeContainer}>
              <Text style={styles.lastExerciseTitle}>Last Exercise</Text>
              <Text style={styles.lastExerciseType}>{lastExercise ? lastExercise.sport : '-'}</Text>
            </View>
          </View>
          {/* Button to Add New Exercise */}
          <Button mode="contained" style={styles.addButton} onPress={() => setModalVisible(true)}>
            Add Exercise
          </Button>
        </View>

        <View style={styles.emptySpace} />

        {/* Summary Component */}
        <Summary exercises={exercises} />

        {/* Modal for Adding New Exercise */}
        <Portal>
          <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={styles.modalContainer}>
            <ExerciseInput onAddExercise={addExercise} />
          </Modal>
        </Portal>

        {/* Button to View Added Exercises */}
        <Button mode="contained" style={styles.addedExercisesButton} onPress={() => setExerciseListVisible(true)}>
          Added Exercises
        </Button>

        {/* Modal to Display List of Added Exercises */}
        <ExerciseListModal 
          exercises={exercises} 
          visible={exerciseListVisible} 
          onClose={() => setExerciseListVisible(false)} 
        />

        {/* Empty space at the bottom for layout */}
        <View style={styles.emptySpaceBottom} />
      </SafeAreaView>
    </PaperProvider>
  );
}
