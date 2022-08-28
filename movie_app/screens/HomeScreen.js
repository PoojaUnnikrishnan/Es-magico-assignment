import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
const SearchScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchData = () => {
    fetch(`http://www.omdbapi.com/?s='${inputValue}'&apikey=c04b6279`).then(
      (res) =>
        res.json().then((res) => {
          setMovies(res);
          let movies = res.Search;
          let totalResults = res.totalResults;
          if (res.Response === "True" && movies) {
            navigation.navigate("Movie Listing", { movies, totalResults });
          }
        })
    );
  };

  const handleChange = (e) => {
    e.target.value;
    setInputValue(e.target.value);
  };
  return (
    <SafeAreaView style={styles.appBody}>
      <Header />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder="Search For Movies.."
            style={styles.input}
            onChange={handleChange}
          />
          <TouchableOpacity>
            <Button style={styles.button} title="Search" onPress={fetchData} />
          </TouchableOpacity>
        </View>
        {movies.Response === "False" && (
          <View>
            <Text>No results</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  appBody: { height: "100%" },
  container: {
    position: "relative",
    display: "flex",
    flex: "15",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    marginTop: "-100px",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    gap: "5px",
  },

  input: {
    borderWidth: "1px",
    borderRadius: "5px",
    fontSize: "15px",
    color: "gray",
    padding: "5px",
  },
  button: {
    color: "white",
    borderRadius: "5px",

    padding: "20px",
  },
});
