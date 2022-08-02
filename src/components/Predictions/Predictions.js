import React from 'react'
import { Prediction } from './Prediction/Prediction';
import './Predictions.css'


export const Predictions = () => {
  return (
    <div className="predictions">
      <Prediction title="Prediction 1" description="Everything that is done - for the better!" liked />
      <Prediction title="Prediction 2" description="have a goof day" />
      <Prediction title="Prediction 3" description="have a goof day" liked />
      <Prediction title="Prediction 4" description="have a goof day" />
      <Prediction title="Prediction 5" description="have a goof day" liked />
      <Prediction title="Prediction 6" description="have a goof day" />
    </div>
  );
}
