import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveIcon from "@mui/icons-material/Remove";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import './Prediction.css'

export const Prediction = ({ title, description, liked, like, deletePrediction, selectPrediction }) => {
  const customFilling = liked ? "crimson" : "black";

  return (
    <div className="prediction">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="actions">
        <button onClick={like} className="svg">
          <FavoriteIcon style={{ fill: customFilling }} />
        </button>

        <button onClick={deletePrediction} className="svg">
          <RemoveIcon />
        </button>

        <button onClick={selectPrediction} className="svg">
          <BorderColorIcon />
        </button>
      </div>
    </div>
  );
};