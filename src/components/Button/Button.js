import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const CustomButton = ({ title, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={onClick}
      data-testid="button"
    >
      {title}
    </Button>
  );
};

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default CustomButton;
