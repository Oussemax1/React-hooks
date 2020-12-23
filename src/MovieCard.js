  
import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";


const MovieCard = ({ movie }) => {

  

  return (
    <div
      className="col-12 movie_card my-2"
      style={{
        backgroundImage: `linear-gradient(135deg,white, rgba(255,255,255,.1)), url(${
          movie.second_img || backUp
        })`,
      }}
    >
      <div className="left_side">
        <div className="left_side_inner">
          <img src={movie.main_img || mainBackUp} alt="pic" />
          <div>
            <h1>
              {movie.title}{" "}
              <Link to={`/trailer/${movie.title}`} className="button">
                Trailer
              </Link>
            </h1>

            <p>{movie.date}</p>
            <div className="d-flex">
              <p className="duration mr-2">{movie.duration}</p>
              <p>{movie.genre}</p>
            </div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
            />
          </div>
        </div>
        <div>
          <p className="description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
