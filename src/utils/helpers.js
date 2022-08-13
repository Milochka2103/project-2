export const setPredictToLocalStorage = (updatedPredictions) => {
  localStorage.setItem("predictions", JSON.stringify(updatedPredictions));
};
