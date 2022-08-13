import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./AddForm.css";
import { setPredictToLocalStorage } from "../../../utils/helpers";

export const AddForm = ({ setShowAddForm, predictions, setPredictions }) => {
  const [predictionTitle, setPredictionTitle] = useState("");
  const [predictionDesc, setPredictionDesc] = useState("");

  const handleTitleChange = (e) => {
    setPredictionTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setPredictionDesc(e.target.value);
  };

  const handleFormHide = () => {
    setShowAddForm(false);
  };

  const createPrediction = (e) => {
    e.preventDefault();

    const newPrediction = {
      id: predictions.length + 1,
      title: predictionTitle,
      description: predictionDesc,
      liked: false,
    }

    const updatedPredictions = [...predictions, newPrediction]

    setPredictions(updatedPredictions);

    setPredictToLocalStorage(updatedPredictions);

    setShowAddForm(false);
  };

  return (
    <>
      <form className="addForm" onSubmit={createPrediction}>
        <button className="hideBtn" onClick={handleFormHide}>
          <CloseIcon />
        </button>
        <h2>Create a new prediction</h2>

        <input
          className="addFormInput"
          type="text"
          name="predictionTitle"
          placeholder="Title"
          onChange={handleTitleChange}
        />
        <textarea
          className="addFormInput"
          name="predictionDesc"
          placeholder="Description"
          onChange={handleDescChange}
        />

        <button className="addBtn" type="submit">
          Add
        </button>
      </form>
      <div className="overlay" onClick={handleFormHide} />
    </>
  );
};
