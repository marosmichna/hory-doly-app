import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import story from '@/assets/data/story';

const StoryDetailsScreen = () => {

  const { id } = useLocalSearchParams();

  const storyOne = story.find((s) => s.id.toString() === id);

  console.log(storyOne?.id)

  if (!storyOne) {
    return <Text>Product not found</Text>
  }

  return (
    <View>
      <Text>{storyOne.name}</Text>
      <Text>{storyOne.prolog}</Text>
    </View>
  );
};

export default StoryDetailsScreen;