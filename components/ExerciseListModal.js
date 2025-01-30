import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Modal, Button, Card } from 'react-native-paper';

/**
 * ExerciseListModal Component
 * Displays a modal that lists all exercises added by the user.
 *
 * Props:
 * @param {Array} exercises - List of exercise objects containing sport, distance, duration, and date.
 * @param {boolean} visible - Determines whether the modal is visible.
 * @param {Function} onClose - Function to close the modal.
 */
const ExerciseListModal = ({ exercises, visible, onClose }) => {
  
  /**
   * Function to render each exercise item in a Card component.
   * 
   * @param {Object} item - Individual exercise object containing sport, distance, duration, and date.
   */
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        {/* Display exercise details in a formatted way */}
        <Text style={styles.text}>
          <Text style={styles.bold}>Sport:</Text> {item.sport}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Distance:</Text> {item.distance} km
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Duration:</Text> {item.duration} min
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Date:</Text> {item.date}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <Modal 
      visible={visible} 
      onDismiss={onClose} 
      contentContainerStyle={styles.modal}
    >
      {/* Header with a Close button */}
      <View style={styles.header}>
        <Button mode="text" onPress={onClose}>
          Close
        </Button>
      </View>

      {/* FlatList to display all exercises dynamically */}
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => index.toString()} // Use index as key since exercises might not have unique IDs
        renderItem={renderItem} // Function to render each item
      />
    </Modal>
  );
};

/**
 * Styles for the ExerciseListModal component
 */
const styles = StyleSheet.create({
  modal: {
    padding: 20,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 10,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // Adds a subtle shadow effect
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold', // Makes specific text bold for emphasis
  },
});

export default ExerciseListModal;
