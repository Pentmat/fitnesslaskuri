import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';  // Importing FontAwesome icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';  // Importing MaterialCommunity icons
import Ionicons from '@expo/vector-icons/Ionicons';  // Importing Ionicons
import customTheme from '../theme';  // Custom theme for PaperProvider
import { Provider as PaperProvider, Button, Modal, Portal } from 'react-native-paper'; // PaperProvider and other components from react-native-paper

// Summary component takes 'exercises' as prop
const Summary = ({ exercises }) => {
  // Calculate total distance, sum of distances from all exercises, rounded to two decimal places
  const totalDistance = exercises.reduce((sum, exercise) => sum + exercise.distance, 0).toFixed(2);
  
  // Calculate total duration, summing up all the durations (converts to minutes)
  const totalDuration = exercises.reduce((sum, exercise) => sum + parseInt(exercise.duration, 10), 0);

  // Calculate total calories burned, summing calories from each exercise and rounding to a whole number
  const totalCalories = exercises.reduce((sum, exercise) => sum + exercise.caloriesBurned, 0).toFixed(0);

  return (
    // PaperProvider is used to apply custom theme to Paper components inside
    <PaperProvider theme={customTheme}> 

      <View style={styles.container}>
        {/* Container that holds all the summary items */}
        <View style={styles.summaryColumn}>
          <Text style={styles.bold} >Summary</Text>
          {/* Display total distance with FontAwesome icon for visual effect */}
          <Text style={styles.summaryItem}>
            <FontAwesome name="arrow-circle-right" size={24} color="white" />
            <Text style={styles.bold}>  {totalDistance} km</Text> 
          </Text>
          <Text style={styles.summaryItem}>Distance</Text>

          {/* Display total time with MaterialCommunityIcons clock icon */}
          <Text style={styles.summaryItem}>
            <MaterialCommunityIcons name="clock-time-eight-outline" size={24} color="white" />
            <Text style={styles.bold}>  {Math.floor(totalDuration / 60)}h {totalDuration % 60}min</Text>
          </Text>
          <Text style={styles.summaryItem}>Time</Text>

          {/* Display total calories with Ionicons flame icon */}
          <Text style={styles.summaryItem}>
            <Ionicons name="flame-sharp" size={24} color="white" />
            <Text style={styles.bold}>  {totalCalories} kcal</Text> 
          </Text>
          <Text style={styles.summaryItem}>Calories</Text>
        </View>
      </View>

    </PaperProvider>
  );
};

// Styling for the component
const styles = StyleSheet.create({
  // Main container for the summary
  container: {
    padding: 16, // Padding around the content
    marginBottom: 16, // Bottom margin
    backgroundColor: '#FDA07D', // Background color of the summary box
    borderRadius: 12, // Rounded corners
    elevation: 2, // Shadow effect for elevation
    width: '300', // Fixed width for the summary box
    alignContent: '' // Align content setting (empty here, no effect)
  },
  title: {
    fontSize: 18, // Title font size
    fontWeight: 'bold', // Bold title text
    marginBottom: 12, // Margin below the title
    color: 'black', // Title color
  },
  summaryColumn: {
    flexDirection: 'column', // Stack summary items vertically
    justifyContent: 'space-between', // Distribute space evenly
  },
  summaryItem: {
    fontSize: 16, // Text size for the summary item
    color: '#fff', // White text color
  },
  bold: {
    fontWeight: 'bold', // Make specific text bold
    color: '#fff', // White color for bold text
  },
});

export default Summary;
