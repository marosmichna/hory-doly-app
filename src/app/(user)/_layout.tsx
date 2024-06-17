// import React from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Link, Tabs } from 'expo-router';
// import { Pressable, StyleSheet, View } from 'react-native';


// import { useColorScheme } from '@/src/components/useColorScheme';
// import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
// import Colors from '@/src/constants/Colors';


// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <View style={styles.container}>
//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//           headerShown: useClientOnlyValue(false, true),
//           tabBarStyle: { display: 'none' },
//         }}
//       >
//         <Tabs.Screen
//           name="myStory"
//           options={{
//             title: 'Menu',
//             headerShown: true,
//             tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
//           }}
//         />
//       </Tabs>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -13 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#D9D9D9',
        }
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        // headerShown: useClientOnlyValue(false, true),
      }}>

      {/* <Tabs.Screen name='index' options={{ href: null }}/>  */}
      <Tabs.Screen
            name="index"
            options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            }}
        />
        <Tabs.Screen
            name="myStory"
            options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
            }}
        />
        <Tabs.Screen
            name="storyMap"
            options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
            }}
        />
        {/* <Tabs.Screen
          name="storyUser"
          options={{
          title: 'Story User',
          headerShown: true,
          tabBarButton: () => null,
          }}
        /> */}
    </Tabs>
  );
}
