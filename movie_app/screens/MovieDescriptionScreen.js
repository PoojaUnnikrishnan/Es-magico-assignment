import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";

const MovieDescriptionScreen = (item) => {
  let movieTitle = item.route.params.item.Title;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t='${movieTitle}'&apikey=c04b6279`).then(
      (res) =>
        res.json().then((res) => {
          setMovies(res);
        })
    );
  }, []);

  return (
    <View style={styles.appBody}>
      <View style={styles.container}>
        <Text style={styles.header}>{movies.Title}</Text>
        <Image
          source={{
            uri: `${movies.Poster}`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          Genre: <span style={styles.innerContent}>{movies.Genre}</span>
        </Text>
        <Text style={styles.content}>
          Rating: <span style={styles.innerContent}>{movies.imdbRating}⭐</span>
        </Text>
        <Text style={styles.content}>
          Votes: <span style={styles.innerContent}>{movies.imdbVotes}</span>
        </Text>
        <Text style={styles.content}>
          Released on:{" "}
          <span style={styles.innerContent}>{movies.Released}</span>
        </Text>
        <Text style={styles.content}>
          Year Of Release:{" "}
          <span style={styles.innerContent}>{movies.Year}</span>
        </Text>
        <Text style={styles.content}>
          Runtime: <span style={styles.innerContent}>{movies.Runtime}</span>
        </Text>
        <Text style={styles.content}>
          Director: <span style={styles.innerContent}>{movies.Director}</span>
        </Text>
        <Text style={styles.content}>
          Writer: <span style={styles.innerContent}>{movies.Writer}</span>
        </Text>
        <Text style={styles.content}>
          Plot: <span style={styles.innerContent}>{movies.Plot}</span>
        </Text>
        <Text style={styles.content}>
          Cast: <span style={styles.innerContent}>{movies.Actors}</span>
        </Text>
        <Text style={styles.content}>
          Country: <span style={styles.innerContent}>{movies.Country}</span>
        </Text>
        <Text style={styles.content}>
          Awards: <span style={styles.innerContent}>{movies.Awards}</span>
        </Text>
        <Text style={styles.content}>
          Languages: <span style={styles.innerContent}>{movies.Language}</span>
        </Text>
      </View>
    </View>
  );
};

export default MovieDescriptionScreen;
Screen;
const styles = StyleSheet.create({
  appBody: {
    backgroundColor: "#f2f2f2",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: "35px",
    fontWeight: "bold",
    fontFamily: "jazz let",
    padding: "10px",
  },
  image: {
    height: "200px",
    width: "200px",
    padding: "10px",
  },
  contentContainer: {
    margin: "40px",
    justifyContent: "space-evenly",
  },
  content: {
    fontSize: "15px",
    fontWeight: "bold",
    padding: "5px",
  },
  innerContent: {
    color: "gray",
  },
});
