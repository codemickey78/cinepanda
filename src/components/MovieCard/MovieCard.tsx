import React from "react";
// import '../component.scss';
const MovieCard = ({image}: any) => {
  return (
    <div className="mnt-card position-relative">
      <div className="mnt-card-overlay">
        <div className="mnt-co-inner">
          <h4>jakksjdheg</h4>
        </div>
      </div>
      <img src={image} alt="mov-img" />
    </div>
  );
};

export default MovieCard;
