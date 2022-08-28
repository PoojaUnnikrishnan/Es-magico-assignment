import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
// import axios from axios
const SearchScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchData = () => {
    fetch(`http://www.omdbapi.com/?s='${inputValue}'&apikey=c04b6279`).then(
      (res) =>
        res.json().then((res) => {
          setMovies(res.Search);
          let movies = res.Search;
          let totalResults = res.totalResults;
          //   console.log(totalResults);
          if (res.Response === "True" && movies) {
            navigation.navigate("Movie Listing", { movies, totalResults });
          }
        })
    );
  };
  //   useEffect(() => {
  //   }, []);
  console.log(movies);
  console.log(movies.Title);
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
            // value={inputValue}
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
    // border: "15px solid black",
  },
  innerContainer: {
    // border: "1px solid blue",
    marginTop: "-100px",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontFamily: "Brush Script MT",
    fontWeight: "bolder",
    fontSize: "30px",
  },
  input: {
    // boder: "1px solid gray",
    borderWidth: "2px",
    borderRadius: "5px",
    fontSize: "20px",
    color: "gray",
  },
  button: {
    color: "white",
  },
});
