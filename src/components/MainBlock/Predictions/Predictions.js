import React, { useState } from "react";
import { PREDICTIONS_URL } from "../../../utils/constants";
import { AddForm } from "./AddForm/AddForm";
import { EditForm } from "./EditForm/EditForm";
import { Prediction } from "./Prediction/Prediction";
import "./Predictions.css";

export const Predictions = ({
  predictions,
  setPredictions,
  isLoading,
  error,
  isLikedPredictions = false
}) => {

  const likedPredictions = predictions.filter(
    (prediction) => prediction.liked
  );

  const like = (pos) => {
    const updatedPredictions = [...predictions];
    updatedPredictions[pos].liked = !updatedPredictions[pos].liked;

    fetch(PREDICTIONS_URL + updatedPredictions[pos].id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPredictions[pos]),
    })
      .then((res) => res.json())
      .then((updatedPredictionFromServer) => {
        updatedPredictions[pos] = updatedPredictionFromServer;
        setPredictions(updatedPredictions);
      })
      .catch((err) => console.log(err));
  };

  const deletePrediction = (predictionId) => {
    const isDelete = window.confirm("Delete prediction?");

    if (isDelete) {
      fetch(PREDICTIONS_URL + predictionId, { method: "DELETE" })
        .then(() =>
          setPredictions(
            predictions.filter((prediction) => prediction.id !== predictionId)
          )
        )
        .catch((err) => console.log(err));
    }
  };

  const [selectedPrediction, setSelectedPrediction] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPrediction = (prediction) => {
    setSelectedPrediction(prediction);
    setShowEditForm(true);
  };
  
  const [showAddForm, setShowAddForm] = useState(false);

  const handleShowAddForm = () => {
    setShowAddForm(true);
  };

  if (isLoading) return <h1>Getting data</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <div>
        {!isLikedPredictions && (
          <button onClick={handleShowAddForm} className="showAddFormBtn">
          Create a new prediction
        </button>
        )}

        {showAddForm && (
          <AddForm
            setShowAddForm={setShowAddForm}
            predictions={predictions}
            setPredictions={setPredictions}
          />
        )}
      </div>
      <section className="predictions">
        {(isLikedPredictions ? likedPredictions : predictions).map(
          (prediction, pos) => {
            return (
              <Prediction
                title={prediction.title}
                description={prediction.description}
                liked={prediction.liked}
                deletePrediction={() => deletePrediction(prediction.id)}
                like={() => like(pos)}
                selectPrediction={() => selectPrediction(prediction)}
                key={prediction.id}
              />
            );
          }
        )}
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
