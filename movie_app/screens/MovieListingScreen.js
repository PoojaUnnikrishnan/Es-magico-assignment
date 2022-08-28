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
  //   console.log(movies);
  let totalResult = movies.route.params.totalResults;
  console.log(movies.route.params.totalResults);
  let movie = movies.route.params.movies;
  let navigation = useNavigation();

  // const handlePress = () => {
  //   navigation.push("Movie Description");
  // };
  const loadMore = () => {};
  return (
    <View>
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
      <Button onPress={loadMore} />
    </View>
  );
};

export default MovieListingScreen;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    // padding: "10px",
    // border: "1px solid black",
    margin: "20px",
    backgroundColor: "black",
  },
  text: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    // border: "1px solid white",
    margin: "5px",
  },
  image: {
    height: "200px",
    width: "200px",
    // border: "1px solid white",
    margin: "5px",
  },
});
