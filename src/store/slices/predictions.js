import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PREDICTIONS_URL } from "../../utils/constants";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export const fetchPredictions = createAsyncThunk(
  "predictions/fetchPredictions",
  async () => {
    const response = await fetch(PREDICTIONS_URL);

    if (response.ok) {
      return await response.json();
    } else {
      return new Error("Error while getting information");
    }
  }
);

export const deletePrediction = createAsyncThunk(
  "predictions/deletePrediction",
  async (predictionId) => {
    const response = await fetch(PREDICTIONS_URL + predictionId, {
      method: "DELETE",
    });

    if (response.ok) {
      return await response.json();
    } else {
      return new Error("Error while deleting prediction");
    }
  }
);

export const editPrediction = createAsyncThunk(
  "predictions/editPredictions",
  async (updatedPrediction) => {
    const response = await fetch(PREDICTIONS_URL + updatedPrediction.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPrediction),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return new Error("Error while editing prediction");
    }
  }
);

export const addNewPrediction = createAsyncThunk(
  "predictions/addNewPrediction",
  async (newPrediction) => {
    const response = await fetch(PREDICTIONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrediction),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return new Error("Error while creating prediction");
    }
  }
);

const predictionsSlice = createSlice({
  name: "predictions",
  initialState,
  reducers: {
    setPredictions: (state, action) => {
      state.predictions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPredictions.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPredictions.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPredictions.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(deletePrediction.fulfilled, (state, action) => {
      state.list = state.list.filter(
        (prediction) => prediction.id !== action.payload.id
      );
    });
    builder.addCase(deletePrediction.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(editPrediction.fulfilled, (state, action) => {
      state.list = state.list.map((prediction) => {
        if (prediction.id === action.payload.id) {
          return action.payload;
        }
        return prediction;
      });
    });
    builder.addCase(editPrediction.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(addNewPrediction.fulfilled, (state, action) => {
      state.list = [...state.list, action.payload];
    });
    builder.addCase(addNewPrediction.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const predictionsReducer = predictionsSlice.reducer;
export const { setPredictions } = predictionsSlice.actions;
export const selectPredictionsData = (state) => state.predictions;
