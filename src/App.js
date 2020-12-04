import React, { useState } from "react";
import "./App.css";
import "./index.css";
import MovieList from "./MovieList";
import Recherche from "./search";
import AddMovie from "./AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";

 

function App(props) {
  const [movie, setMovie] = useState({
    image: null,
    title: "",
    description: "",
    rate: 0,
  });
  const [filter, setFilter] = useState({
    text: "",
    star: 0,
  });

  const [movies, setMovies] = useState([
    {
      image:
        "https://radradio.com/wp-content/uploads/jumanji-next-level-951x548.jpg",
        width: 500,
      title: " Jumanji",
      description: "Comedy ",
      url: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
      rate: 5,
    },
    {
      image:
        "https://tecake.com/wp-content/uploads/2020/05/Bad-Boys-for-Life-2020.jpg",
        width: 500,
      title: "Bad Boys 2020",
      description: "Comedy/Action",
      url: "https://www.youtube.com/watch?v=jKCj3XuPG8M",
      rate: 4,
    },
    {
      image:
        "https://fr.web.img6.acsta.net/newsv7/20/11/19/16/54/0428582.jpg",
        width: 500,
      title: "Wonder Woman",
      description: "Action/Heroic",
      url: "https://www.youtube.com/watch?v=XW2E2Fnh52w",
      rate: 3,
    },
    {
      image:
        "https://ctr.cdnartwhere.eu/sites/demo/files/styles/manual_crop/public/2020-10/Encadre1-Coup-de-coeur-Clouds-Disney.jpg",
      title: "Clouds",
      description: "Romance/Drama",
      url: "https://www.youtube.com/watch?v=OWEgUhWU4g4",
      rate: 2,
    },
  ]);
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };


  return (
    <div className="App">
      <br />
      <MovieList
      
        movies={movies.filter(
          (e) =>
            e.title.toLowerCase().includes(filter.text.toLowerCase()) &&
            e.rate >= filter.star
        )}
      />
      <AddMovie AddMovie={setMovies} films={movies} />
      <Recherche setFilter={setFilter} filter={filter} />
      {console.log(filter)}

      {console.log(movie)}
    </div>
  );
}

export default App;
