import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsPage = ({ route }) => {
  const { item } = route.params;

  // Split the body text into paragraphs based on newline character
  const paragraphs = item.body.split('\n');

  return (
    <View style={styles.container}>
      {/* Display ID */}
      <Text style={styles.heading}>Id:</Text>
      <Text style={styles.content}>{item.id}</Text>

      {/* Display Title */}
      <Text style={styles.heading}>Title:</Text>
      <Text style={styles.content}>{item.title}</Text>

      {/* Display Body */}
      <Text style={styles.heading}>Body:</Text>
      {paragraphs.map((paragraph, index) => (
        <View key={index} style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.content}>{paragraph}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abdbe3',
    padding: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  content: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333'
  },
  bulletItem: {
    flexDirection: 'row'
  },
  bullet: {
    marginRight: 5,
    fontSize: 20,
    color: '#333'
  },

});

export default DetailsPage;
