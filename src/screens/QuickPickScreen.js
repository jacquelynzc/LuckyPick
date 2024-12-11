import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function QuickPickScreen() {
  // State to store generated numbers
  const [numbers, setNumbers] = useState(generateNumbers(69, 5, 26));

  // Function to generate random numbers
  function generateNumbers(maxMain, mainCount, maxSpecial) {
    const mainNumbers = generateUniqueRandoms(maxMain, mainCount).sort((a, b) => a - b);
    const specialNumber = generateUniqueRandoms(maxSpecial, 1)[0];
    return { mainNumbers, specialNumber };
  }

  // Helper function to generate unique random numbers
  function generateUniqueRandoms(max, count) {
    const numbers = new Set();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(numbers);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Lucky Numbers</Text>
      <Text style={styles.numbers}>
        {numbers.mainNumbers.join(' - ')} + {numbers.specialNumber}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setNumbers(generateNumbers(69, 5, 26))}
      >
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3c40c6',
    marginBottom: 20,
  },
  numbers: {
    fontSize: 20,
    color: '#34ace0',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#34ace0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
