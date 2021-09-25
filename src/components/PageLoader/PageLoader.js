import React from 'react';
import './PageLoader.scss';
import { Typography } from '@material-ui/core';

const PageLoader = () => {
  return (
    <div className="loader-container">
      <div className="lds-ripple ">
        <div></div>
        <div></div>
      </div>
      <Typography variant="h5">Loading...</Typography>
    </div>
  );
};

export default PageLoader;
