import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.logo}>LuckyPick</Text>

      {/* Main Buttons */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('QuickPick')}
      >
        <Text style={styles.buttonText}>Quick Pick</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('PersonalizedPicks')}
      >
        <Text style={styles.buttonText}>Personalized Picks</Text>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <Icon name="home" type="font-awesome" onPress={() => navigation.navigate('Home')} />
        <Icon name="chart-bar" type="font-awesome-5" onPress={() => navigation.navigate('Trends')} />
        <Icon name="users" type="font-awesome" onPress={() => navigation.navigate('Pool')} />
        <Icon name="bell" type="font-awesome" onPress={() => navigation.navigate('Notifications')} />
        <Icon name="cog" type="font-awesome" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#3c40c6',
  },
  button: {
    backgroundColor: '#34ace0',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default HomeScreen;
