import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Prediction.css'

export const Prediction = ({ title, description, liked }) => {
  const [isLiked, setIsLiked] = useState(liked)

  const customFilling = isLiked ? "crimson" : "black";

  const like = () => setIsLiked(!isLiked);

  return (
    <div className="prediction">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={like} className="likeBtn">
        <FavoriteIcon style={{ fill: customFilling }} />
      </button>
    </div>
  );
}