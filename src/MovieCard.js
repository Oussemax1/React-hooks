import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./App.css";
import StarRatingComponent from "react-star-rating-component";


const MovieCard = ({ movie }) => {

  

  return (
    <div className="ccc">
      <Card className="Card" >
        <Card.Img style={{width: 200, height:150}} src={movie.image} />
        <Card.Body>
          <Card.Title style={{color :"#FFFfff"}}>{movie.title}</Card.Title>
          <Card.Text style={{color :"#FFFfff"}}>{movie.description}</Card.Text>
         <button> <a variant="primary" href={movie.url} target="_blank">Watch Trailer</a></button>
          <div>
            <StarRatingComponent
              name={movie.title}
              editing={false}
              value={movie.rate}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default MovieCard;
