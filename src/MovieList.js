import React from 'react';
import MovieCard from './MovieCard';

function MovieList({movies}) {
    
    return (
        <div className="container">
           {movies.map((e) =>
            <MovieCard movie={e} key={e.title}/>
            )} 
            
        </div>
    );
}
export default MovieList;