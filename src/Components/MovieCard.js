import "./MovieCard.css";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


import React from "react";

function MovieCard(props) {
  const {imgSrc,movieName,year,director,runtime,gener,synopsis}=props;
  return (
    <div className="Container">
     
      <div className="MovieDetails">
      <div className="movieImg1">
        <img src={imgSrc} alt="" />
      </div>
       
       <div>
         <h2 className="MovieName">{movieName}</h2>
        <p>Year of Release:{year}</p>
        <p>Director: {director}</p>
        <p>Time: {runtime}</p>
        <p>Geners: {gener}</p>
        <p className="extraContent">Synopsis:{synopsis}</p>
        <div className="cardIcon">
          <FaShareAlt className="icon" />
          <FaHeart className="icon" />
          <FaMessage className="icon" />
        </div>
      </div>
      </div>
      <div className="movieImg">
        <img src={props.imgSrc} alt="" />
      </div>
    </div>
  );
}

export default MovieCard;
