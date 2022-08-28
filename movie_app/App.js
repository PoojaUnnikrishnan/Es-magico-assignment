import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListingScreen from "./screens/MovieListingScreen";
import MovieDescriptionScreen from "./screens/MovieDescriptionScreen";
import Header from "./components/Header";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Movie Listing" component={MovieListingScreen} />
        <Stack.Screen
          name="Movie Description"
          component={MovieDescriptionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
