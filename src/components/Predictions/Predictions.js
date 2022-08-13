import React, { useState } from "react";
import { PREDICTIONS } from "../../utils/constants";
import { setPredictToLocalStorage } from "../../utils/helpers";
import { AddForm } from "./AddForm/AddForm";
import { EditForm } from "./EditForm/EditForm";
import { Prediction } from "./Prediction/Prediction";
import "./Predictions.css";

export const Predictions = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleShowAddForm = () => {
    setShowAddForm(true);
  };

  const [predictions, setPredictions] = useState(
    JSON.parse(localStorage.getItem("predictions")) || PREDICTIONS
  );

  const like = (pos) => {
    const updatedPredictions = [...predictions];

    updatedPredictions[pos].liked = !updatedPredictions[pos].liked;

    setPredictToLocalStorage(updatedPredictions);

    setPredictions(updatedPredictions);
  };

  const deletePrediction = (predictionId) => {
    const isDelete = window.confirm("Delete prediction?");

    if (isDelete) {
      const updatedPredictions = predictions.filter((prediction) => {
        return prediction.id !== predictionId;
      });

      setPredictToLocalStorage(updatedPredictions);
      setPredictions(updatedPredictions);
    }
  };

  const [selectedPrediction, setSelectedPrediction] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPrediction = (pos) => {
    setSelectedPrediction(predictions[pos]);
    setShowEditForm(true);
  };

  return (
    <>
      <div>
        <button onClick={handleShowAddForm} className="showAddFormBtn">
          Create a new prediction
        </button>
        {showAddForm && (
          <AddForm
            setShowAddForm={setShowAddForm}
            predictions={predictions}
            setPredictions={setPredictions}
          />
        )}
      </div>
      <section className="predictions">
        {predictions.map((prediction, pos) => {
          return (
            <Prediction
              title={prediction.title}
              description={prediction.description}
              liked={prediction.liked}
              deletePrediction={() => deletePrediction(prediction.id)}
              like={() => like(pos)}
              selectPrediction={() => selectPrediction(pos)}
              key={prediction.id}
            />
          );
        })}
      </section>

      {showEditForm && (
        <EditForm
          selectedPrediction={selectedPrediction}
          setShowEditForm={setShowEditForm}
          setPredictions={setPredictions}
          predictions={predictions}
        />
      )}
    </>
  );
};
