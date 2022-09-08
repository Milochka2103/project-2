import { useEffect, useState } from "react";

export const useFetchPredictions = (url) => {
  const [predictions, setPredictions] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  /* Запрос на сервер */
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((predictionsFromServer) => {
        setPredictions(predictionsFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return { predictions, setPredictions, isLoading, error };
};
