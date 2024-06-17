import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import HomePageLink from '@/src/components/HomePage/HomePageLink';
import UserImage from "@/assets/images/HomePage/user-transparent.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Text style={styles.userText}>Vitaj, Adam</Text>
        <View>
          <View style={styles.imageFrame}>
            <Image 
              source={UserImage}
              style={styles.userImage}
            />
          </View>
        </View>
      </View>
      <HomePageLink
        name='MOJE PRÍBEHY' 
        url='/myStory'
      />
      <HomePageLink
        name='MAPA PRÍBEHOV' 
        url='/storyMap'
      />
      <HomePageLink
        name='NAPLÁNOVANÉ TÚRY' 
        url='/myStory'
      />
      <HomePageLink
        name='MÔJ PROFIL' 
        url='/myStory'
      />
      <HomePageLink
        name='STAŇ SA ČLENOM' 
        url='/myStory'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F7F26'
  },
  userContainer: {
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 45,
    borderRadius: 10,
    paddingVertical: 20
  },
  userText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  imageFrame: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 120/2
  },
  userImage: {
    width: 80,
    height: 80
  }
})

export default Home;




