import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieListingScreen = (movies) => {
  let movie = movies.route.params.movies;
  let navigation = useNavigation();

  return (
    <View style={styles.appBody}>
      {movie?.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() => {
            navigation.navigate("Movie Description", { item });
          }}
        >
          <Text style={styles.text}>{item.Title}</Text>
          <Image
            source={{
              uri: `${item.Poster}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MovieListingScreen;
const styles = StyleSheet.create({
  appBody: {
    backgroundColor: "#f2f2f2",
  },
  container: {
    display: "flex",
    alignItems: "center",
    margin: "20px",
    backgroundColor: "black",
  },
  text: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    margin: "5px",
  },
  image: {
    height: "200px",
    width: "200px",
    margin: "5px",
  },
});
