import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput, Menu } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

// ExerciseInput component that handles user input for exercise data
const ExerciseInput = ({ onAddExercise }) => {
  // State hooks for managing sport, distance, duration, date, and menu visibility
  const [sport, setSport] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // default date is current date
  const [menuVisible, setMenuVisible] = useState(false); // Controls visibility of sport selection menu

  // Fake weight for mockup purposes (in real scenario, it might come from user profile)
  const weight = 86; 

  // MET (Metabolic Equivalent of Task) values for different sports
  const metValues = {
    Walk: 3.8,
    Run: 9.8,
    Cycle: 7.5,
  };

  // Function to calculate calories burned based on distance, duration, weight, and MET value
  const calculateCaloriesBurned = () => {
    const met = metValues[sport]; // Get the MET value based on selected sport
    const durationInHours = parseFloat(duration) / 60; // Convert duration from minutes to hours
    const distanceInKm = parseFloat(distance);  // Get the distance input value

    if (met && weight && durationInHours && distanceInKm) {
      // Calories burned formula using MET value, weight, distance, and duration
      const calories = (met * weight * distanceInKm) / 10; 
      return calories; // Return calculated calories burned
    }
    return 0; // Return 0 if any value is missing or invalid
  };

  // Handler function for adding exercise data
  const handleAddExercise = () => {
    if (sport && distance && duration && date) {
      const caloriesBurned = calculateCaloriesBurned(); // Calculate calories
      onAddExercise({
        sport,               // Sport selected by the user
        distance: parseFloat(distance), // Distance in km
        duration,            // Duration in minutes
        date,                // Date of exercise
        caloriesBurned,     // Calories burned calculated
      });
      // Reset the state to clear the form after adding exercise
      setSport('');
      setDistance('');
      setDuration('');
      setDate(new Date().toISOString().split('T')[0]); // Reset date to current date
    }
  };

  return (
    <View style={styles.container}>
      {/* Menu component for selecting the sport */}
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)} // Close menu when dismissed
        anchor={
          // Button to trigger the sport selection menu
          <Button mode="outlined" onPress={() => setMenuVisible(true)}>
            {sport || 'Select Sport'} {/* Show selected sport or default text */}
          </Button>
        }
      >
        {/* Menu items for each sport */}
        <Menu.Item
          onPress={() => {
            setSport('Walk'); // Set selected sport to "Walk"
            setMenuVisible(false); // Close menu
          }}
          title="Walk"
        />
        <Menu.Item
          onPress={() => {
            setSport('Run'); // Set selected sport to "Run"
            setMenuVisible(false); // Close menu
          }}
          title="Run"
        />
        <Menu.Item
          onPress={() => {
            setSport('Cycle'); // Set selected sport to "Cycle"
            setMenuVisible(false); // Close menu
          }}
          title="Cycle"
        />
      </Menu>

      {/* Input field for entering distance (in kilometers) */}
      <TextInput
        mode="outlined"
        label="Distance (km)"
        keyboardType="numeric"
        value={distance}
        onChangeText={(text) => setDistance(text)} // Update distance on change
        style={styles.input}
      />

      {/* Input field for entering duration (in minutes) */}
      <TextInput
        mode="outlined"
        label="Duration (minutes)"
        keyboardType="numeric"
        value={duration}
        onChangeText={(text) => setDuration(text)} // Update duration on change
        style={styles.input}
      />

      {/* DatePicker for selecting the date of exercise */}
      <DatePicker
        style={styles.datePicker}
        date={date}
        mode="date"
        placeholder="Select Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(selectedDate) => setDate(selectedDate)} // Update date on selection
      />

      {/* Button to add exercise data */}
      <Button
        mode="contained"
        onPress={handleAddExercise} // Call handleAddExercise when clicked
        style={styles.addButton}
      >
        Add Exercise
      </Button>

      {/* Display calories burned if valid sport, duration, and distance are provided */}
      {sport && duration && distance && (
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesText}>
            Calories Burned: {calculateCaloriesBurned().toFixed(2)} kcal
          </Text>
        </View>
      )}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  input: {
    marginBottom: 10, // Add margin to separate input fields
  },
  datePicker: {
    width: '100%',
    marginBottom: 20, // Space between date picker and next input
  },
  addButton: {
    marginTop: 10, // Add top margin for spacing
  },
  caloriesContainer: {
    marginTop: 10, // Add space above the calories text
  },
  caloriesText: {
    fontSize: 16, // Set font size for calories text
    color: '#000', // Set text color to black
  },
});

export default ExerciseInput;
