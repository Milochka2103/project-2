import React, { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import './EditForm.css';
import { PREDICTIONS_URL } from '../../../../utils/constants';


export const EditForm = ({
  setShowEditForm,
  selectedPrediction,
  setPredictions,
  predictions,
}) => {
  const [predictionTitle, setPredictionTitle] = useState(
    selectedPrediction?.title
  );
  const [predictionDesc, setPredictionDesc] = useState(
    selectedPrediction?.description
  );

  const handleTitleChange = (e) => {
    setPredictionTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setPredictionDesc(e.target.value);
  };

  const handleFormHide = () => {
    setShowEditForm(false);
  };

  const editPrediction = (e) => {
    e.preventDefault();

    const updatedPrediction = {
      ...selectedPrediction,
      title: predictionTitle,
      description: predictionDesc,
    }

    fetch(PREDICTIONS_URL + selectedPrediction.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(updatedPrediction)
    })
      .then(res => res.json())
      .then(updatedPredictionFromServer => {
        
        const updatedPredictions = predictions.map((prediction) => {
          if (prediction.id === updatedPredictionFromServer.id)
            return updatedPredictionFromServer;
          return prediction;
        })
        setPredictions(updatedPredictions);
        setShowEditForm(false);
      })
      .catch((err) => console.log(err))
  };

  return (
    <>
      <form className="editForm" onSubmit={editPrediction}>
        <button className="hideBtn" onClick={handleFormHide}>
          <CloseIcon />
        </button>
        <h2>Edit a prediction</h2>

        <input
          className="editFormInput"
          type="text"
          name="predictionTitle"
          placeholder="Title"
          value={predictionTitle}
          onChange={handleTitleChange}
        />
        <textarea
          className="editFormInput"
          name="predictionDesc"
          placeholder="Description"
          value={predictionDesc}
          onChange={handleDescChange}
        />

        <button className="editBtn" type="submit">
          Save
        </button>
      </form>
      <div className="overlay" onClick={handleFormHide} />
    </>
  );
};
