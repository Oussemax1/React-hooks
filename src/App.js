import React, { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import { Search } from "./Search";
import Trailer from "./Trailer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactPlayer from "react-player";
 

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

  function App() {
    const [movies, setMovies] = useState([
      {
        main_img:
        "https://radradio.com/wp-content/uploads/jumanji-next-level-951x548.jpg",
        width: 500,
      title: " Jumanji",
      description: "Comedy ",
      url: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
      rate: 5,
    },
    {
      main_img:
        "https://tecake.com/wp-content/uploads/2020/05/Bad-Boys-for-Life-2020.jpg",
        width: 500,
      title: "Bad Boys 2020",
      description: "Comedy/Action",
      url: "https://www.youtube.com/watch?v=jKCj3XuPG8M",
      rate: 4,
    },
    {
      main_img:
        "https://fr.web.img6.acsta.net/newsv7/20/11/19/16/54/0428582.jpg",
        width: 500,
      title: "Wonder Woman",
      description: "Action/Heroic",
      url: "https://www.youtube.com/watch?v=XW2E2Fnh52w",
      rate: 3,
    },
    {
      main_img:
        "https://ctr.cdnartwhere.eu/sites/demo/files/styles/manual_crop/public/2020-10/Encadre1-Coup-de-coeur-Clouds-Disney.jpg",
      title: "Clouds",
      description: "Romance/Drama",
      url: "https://www.youtube.com/watch?v=OWEgUhWU4g4",
      rate: 2,
    },
  ]);
  const [keyword, setKeyword] = useState("");
  const [newRate, setNewRate] = useState(1);

  const search = (text) => {
    setKeyword(text);
  };

  const setRate = (rate) => {
    setNewRate(rate);
  };

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <Router>
      <div className="container">
        
        <Search search={search} setRate={setRate} newRate={newRate} />
        
        <MovieList
          addMovie={addMovie}
          movies={movies.filter(
            (movie) =>
              movie.rate >= newRate &&
              movie.title.toLowerCase().includes(keyword.toLowerCase().trim())
          )}/>

        <Route
          path="/trailer/:name"
          render={(props) => <Trailer {...props} listMovies={movies} />}
        />
      </div>
      {/* <Route path="/trailer" component={Trailer} /> */}
    </Router>
  );
}}

export default App;
