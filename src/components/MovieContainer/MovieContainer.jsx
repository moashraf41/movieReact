import React, { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import inception from "../../assets/inception.jpg";
import aot from "../../assets/aot.jpg";
import darkKnight from "../../assets/Dark.jpg";
import endGame from "../../assets/endgame.jpg";
import tenet from "../../assets/tenet.jpg";
import got from "../../assets/got.jpg";

export default function MovieContainer() {
  const allMovies = [
    {
      id: 1,
      title: "Inception",
      year: "2010",
      director: "Christopher Nolan",
      poster: inception,
      rating: "8.8/10",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      ticketPrice: 100,
    },
    {
      id: 2,
      title: "Attack on Titan",
      year: "2013",
      poster: aot,
      director: "Hajime Isayama",
      rating: "9.5/10",
      cast: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert"],
      ticketPrice: 2000 + "$",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: "2008",
      director: "Christopher Nolan",
      poster: darkKnight,
      rating: "9.0/10",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      ticketPrice: 30,
    },
    {
      id: 4,
      title: "Avengers Endgame",
      year: "2019",
      director: "Joe Russo",
      poster: endGame,
      rating: "9.0/10",
      cast: ["Robert Downey Jr", "Chris Evans", "Mark Ruffalo"],
      ticketPrice: 200,
    },
    {
      id: 5,
      title: "Tenet",
      year: "2020",
      director: "Christopher Nolan",
      poster: tenet,
      rating: "8.0/10",
      cast: ["John David Washington", "Robert Pattinson", "Elizabeth Olsen"],
      ticketPrice: 150,
    },
    {
      id: 6,
      title: "Game of Thrones",
      year: "2011",
      director: "David Benioff",
      poster: got,
      rating: "9.5/10",
      cast: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
      ticketPrice: 50,
    },
  ];

  const [movies, setMovies] = useState(allMovies);

  const search = (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value === "") {
      setMovies(allMovies);
    } else {
      const filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(value)
      );
      setMovies(filtered);
    }
  };
  const deleteMovie = (id) => {
    const filtered = movies.filter((movie) => movie.id !== id);
    setMovies(filtered);
  };
  return (
    <section className="my-5">
      <h1 className="text-center mt-5">Movies & Series</h1>
      <div className="container">
        <div className="row justify-content-end">
          <div className="mb-3 col-md-3 text-end">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Search{" "}
            </label>
            <input
              type="text"
              onInput={search}
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>

        <div className="row  row-gap-4">
          {movies.map((movie) => (
            <MovieCard deleteMovie={deleteMovie} key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
