import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const MovieListingScreen = (movies) => {
  let [pageNo, setPageNo] = useState(1);
  let movie = movies.route.params.movies;
  let navigation = useNavigation();
  let totalResult = movies.route.params.totalResults;
  let totalPages = Math.round(totalResult / 10 + 1);
  const loadMore = () => {
    setPageNo(pageNo + 1);
  };
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
      {totalPages !== pageNo ? (
        <Button onPress={loadMore} title="Load More" />
      ) : null}
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
