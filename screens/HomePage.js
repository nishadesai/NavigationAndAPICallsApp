import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([]);

  // Fetch data from API when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Render individual item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
 // Display Title, and FlatList to render the list of items
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Items (Posts)</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

// Styles 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#76b5c5'
  },
  title: {
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  },
  itemContainer: {
    padding: 15,
    marginBottom: 6,
    backgroundColor: '#abdbe3'
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
});

export default HomePage;
