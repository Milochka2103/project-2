import React from 'react';
import { Result } from "antd";
import './NoMatch.css'

export const NoMatch = () => {
  return (
    <div className='noMatch'>
      <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
    </div>
  );
};
