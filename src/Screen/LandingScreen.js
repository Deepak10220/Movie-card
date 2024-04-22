import React from 'react';
import data from '../data.json';
import MovieCard from '../Components/MovieCard';

function LandingScreen(){
  return (
    <>
    {data.movieData.map((element, index) => {
        return (
          <MovieCard
            imgSrc={element.img_url} 
            runtime={element.runtime}
            movieName={element.name}
            director={element.director}
            gener={element.genre}
            synopsis={element.synopsis}
            year={element.year}
            key={index}
          />
        );
      })}
    </>
  )
}

export default LandingScreen