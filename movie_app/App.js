import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "./screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieListingScreen from "./screens/MovieListingScreen";
import MovieDescriptionScreen from "./screens/MovieDescriptionScreen";
import Header from "./components/Header";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <View >
    <NavigationContainer>
      {/* <Header /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Movie Listing" component={MovieListingScreen} />
        <Stack.Screen
          name="Movie Description"
          component={MovieDescriptionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
