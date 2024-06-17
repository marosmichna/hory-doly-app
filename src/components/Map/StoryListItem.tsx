import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Story } from '@/src/types';
import { Link, useSegments } from 'expo-router';

type StoryListItemProps = {
    story: Story;
}

const StoryListItem = ({ story }: StoryListItemProps) => {

  const segments = useSegments();

  return (
    <View>     
      <Link 
        href={`/${segments[1]}/menu/${story.id}`} 
        style={styles.container}
        asChild
      >
          <Pressable>
              <View>
                <Text>{story.name}</Text>
                <Text>{story.heightSea}</Text>
              </View>
          </Pressable>
      </Link>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 200,
  }
});

export default StoryListItem;
