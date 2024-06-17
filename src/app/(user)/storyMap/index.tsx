import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import LogoImage from "@/assets/images/SignUp/SignUpImage.png";

const MyStory = () => {
  return (
    <View style={styles.container}>
      <Link 
        href={'/(user)/storyMap/menu'}
        style={styles.header}
      >
          ZOBRAZIŤ DLAŽDICE
      </Link>
      <Image 
        source={LogoImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F7F26'
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    width: '80%',
    textAlign: 'center',
    borderRadius: 10,
    color: '#2F7F26',
    fontWeight: 'bold',
    fontSize: 14
  },
  mapSlovakia: {
    width: 1000
  }
});

export default MyStory;