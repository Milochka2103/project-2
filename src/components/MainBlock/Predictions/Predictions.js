import React, { useEffect, useState } from "react";
import { AddForm } from "./AddForm/AddForm";
import { EditForm } from "../../EditForm/EditForm";
import { Prediction } from "./Prediction/Prediction";
import "./Predictions.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePrediction, editPrediction, fetchPredictions, selectPredictionsData, setPredictions } from "../../../store/slices/predictions";

export const Predictions = ({ isLikedPredictions = false }) => {
  const { list: predictions, error, isLoading } = useSelector(selectPredictionsData);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPredictions());
  }, [dispatch]);

  /* const likedPredictions = predictions.filter((prediction) => prediction.liked); */

  const handleLikePrediction = (index) => {
    const updatedPredictions = [...predictions];
    updatedPredictions[index] = {...updatedPredictions[index],liked: !updatedPredictions[index].liked}
    dispatch(editPrediction(updatedPredictions[index]));
  };

  const handleDeletePrediction = (predictionId) => {
    dispatch(deletePrediction(predictionId));
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
        {predictions.map((prediction, pos) => {
          return (
            <Prediction
              title={prediction.title}
              description={prediction.description}
              liked={prediction.liked}
              deletePrediction={() => handleDeletePrediction(prediction.id)}
              like={() => handleLikePrediction(pos)}
              selectPrediction={() => selectPrediction(prediction)}
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
