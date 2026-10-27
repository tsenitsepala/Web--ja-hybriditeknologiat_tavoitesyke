import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');

  // Muutetaan numeroksi
  const ageNumber = Number(age);

  // Oletusarvot
  let lowerLimit = '0.00';
  let upperLimit = '0.00';

  // Lasketaan sykerajat vain, jos numero
  if (age !== '' && !isNaN(ageNumber)) {
    const maxHeartRate = 220 - ageNumber;

    lowerLimit = (maxHeartRate * 0.65).toFixed(2);
    upperLimit = (maxHeartRate * 0.85).toFixed(2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>

      <Text style={styles.label}>Enter your age:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.label}>
        Lower limit: {lowerLimit} bpm
      </Text>

      <Text style={styles.label}>
        Upper limit: {upperLimit} bpm
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    padding: 13,
    width: 110,
    marginVertical: 15,
  },
});
