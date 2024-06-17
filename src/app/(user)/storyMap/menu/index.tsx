import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import story from '@/assets/data/story';
import StoryListItem from '@/src/components/Map/StoryListItem';

const MenuScreen = () => {
  return (
    <FlatList 
      data={story}
      renderItem={({ item }) => <StoryListItem story={item} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F7F26',
    gap: 10
  },
});

export default MenuScreen;