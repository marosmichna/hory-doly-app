import { View, Text, StyleSheet } from 'react-native';
import React, { forwardRef } from 'react';
import { Link } from 'expo-router';

type HomePageLinkProps = {
    name: string,
    url: string,
} & React.ComponentPropsWithoutRef<typeof View>

const HomePageLink = forwardRef<View | null, HomePageLinkProps> (
    ({ name, url, ...viewProps}, ref) => {
  return (
    <View ref={ref} {...viewProps} style={styles.container}>
      <Link href={url} style={styles.link}>
        <Text style={styles.text}>{name}</Text>
      </Link>
    </View>
  );
}
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9CC', // CC = 80% opacity
        fontSize: 16,
        borderRadius: 10,
        paddingVertical: 25,
        width: '90%',
        marginBottom: 10,
    },
    link: {
        textAlign: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default HomePageLink;