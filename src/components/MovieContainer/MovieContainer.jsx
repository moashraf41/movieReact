import React, { Component } from "react";
import MovieCard from "./MovieCard/MovieCard";
import inception from "../../assets/inception.jpg";
import aot from "../../assets/aot.jpg";
import darkKnight from "../../assets/Dark.jpg";
import endGame from "../../assets/endgame.jpg";
import tenet from "../../assets/tenet.jpg";
import got from "../../assets/got.jpg";

export default class MovieContainer extends Component {
  movies = [
    {
      id: 1,
      title: "Inception",
      year: "2010",
      director: "Christopher Nolan",
      poster: inception,
      rating: "8.8/10",
    },
    {
      id: 2,
      title: "Attack on Titan",
      year: "2013",
      poster: aot,
      director: "Hajime Isayama",
      rating: "9.5/10",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: "2008",
      director: "Christopher Nolan",
      poster: darkKnight,
      rating: "9.0/10",
    },
    {
      id: 4,
      title: "Avengers Endgame",
      year: "2019",
      director: "Joe Russo",
      poster: endGame,
      rating: "9.0/10",
    },
    {
      id: 5,
      title: "Tenet",
      year: "2020",
      director: "Christopher Nolan",
      poster: tenet,
      rating: "8.0/10",
    },
    {
      id: 6,
      title: "Game of Thrones",
      year: "2011",
      director: "David Benioff",
      poster: got,
      rating: "9.5/10",
    },
  ];
  render() {
    return (
      <section className="mt-5">
        <h1 className="text-center mb-5">Movies & Series</h1>
        <div className="container">
          <div className="row justify-content-between row-gap-4">
            <MovieCard movie={this.movies[0]} />
            <MovieCard movie={this.movies[1]} />
            <MovieCard movie={this.movies[2]} />
            <MovieCard movie={this.movies[3]} />
            <MovieCard movie={this.movies[4]} />
            <MovieCard movie={this.movies[5]} />
          </div>
        </div>
      </section>
    );
  }
}
