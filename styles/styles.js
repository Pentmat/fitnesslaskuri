import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  emptySpace: {
    height: 40,
  },
  emptySpaceBottom: {
    height: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
  },
  lastExerciseCard: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  lastExerciseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exerciseStats: {
    backgroundColor: '#f28b82',
    padding: 16,
    borderRadius: 12,
    minWidth: 180,
    minHeight: 80,
  },
  exerciseStatText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  exerciseTypeContainer: {
    backgroundColor: '#fdd9d7',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  lastExerciseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  lastExerciseType: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    marginTop: 16,
    backgroundColor: '#ff9800',
    borderRadius: 12,
  },
  modalContainer: {
    padding: 16,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
  },
  addedExercisesButton: {
    marginTop: 16,
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    borderRadius: 12,
  },
});

export default styles;