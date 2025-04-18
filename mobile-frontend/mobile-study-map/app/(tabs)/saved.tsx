import { View, Text, StyleSheet, Button } from 'react-native';

import { useRouter } from 'expo-router';
import React from 'react';
import { useAuth } from '@/contexts/AuthContext'; // Importing the AuthContext for authentication
import { createStudySpace } from '@/backend/backendFunctions';

// THIS IS CURRENT JUST A TAB TO TEST BACKEND FUNCTIONALITIES
// specifically to add new study spaces

export default function SavedScreen() {

  const router = useRouter(); // Use expo-router for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Temporary Screen for Testing/Backend</Text>

      {/* New button to add a study space */}
      <Button
        title="Add New Study Space"
        onPress={() => router.push('/addspace')}
        color="#4CAF50"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFBF5', // You can modify this for dark mode
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
