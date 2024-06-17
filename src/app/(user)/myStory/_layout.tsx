import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Image, Pressable, View } from "react-native";
import HeaderImage from "@/assets/images/SignUp/SignUpImage.png";

export default function MenuStack() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                  backgroundColor: '#2F7F26',
                },
                headerTitleStyle: {
                  color: '#FFFFFF', 
                },
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <Link href="/(user)" asChild>
                      <Pressable>
                        {({ pressed }) => (
                          <FontAwesome
                            name="angle-left"
                            size={30}
                            color='#FFFFFF'
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                          />
                        )}
                        
                      </Pressable>
                    </Link>
                  ),
                  headerRight: () => (
                    <Link href="/(user)" asChild>
                      <Pressable>
                        {({ pressed }) => (
                          <Image 
                            source={HeaderImage}
                            style={{ width: 59, height: 48 }}
                          />
                        )}
                        
                      </Pressable>
                    </Link>
                  ),
            }}
        >
            <Stack.Screen 
                name="index"
                options={{ title: 'MOJE PRÍBEHY' }}
                
            />
        </Stack>
    );
};