import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./AddForm.css";
import { useDispatch } from "react-redux";
import { addNewPrediction } from "../../../../store/slices/predictions";

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

  const dispatch = useDispatch()

  const handleCreatePrediction = (e) => {
    e.preventDefault();

    const newPrediction = {
      title: predictionTitle,
      description: predictionDesc,
      liked: false,
    }

    dispatch(addNewPrediction(newPrediction)).finally(() => handleFormHide(false));
  };

  return (
    <>
      <form className="addForm" onSubmit={handleCreatePrediction}>
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
