import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PropTypes from 'prop-types';

const WeatherContainer = props => {
  const {
    handlePrevPage,
    handleNextPage,
    listItems,
    value,
    page,
    pages,
    setTemp,
    setTime,
  } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" spacing={6}>
          {page > 0 ? <ArrowBackIcon onClick={() => handlePrevPage()} /> : null}
          {listItems?.map(item => (
            <Grid key={item} item>
              <WeatherCard
                unit={value}
                setTime={setTime}
                setTemp={setTemp}
                data={item}
              />
            </Grid>
          ))}
          {page + 1 < pages ? (
            <ArrowForwardIcon onClick={() => handleNextPage()} />
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '3rem',
    marginBottom: '1.5rem',
  },
  control: {
    padding: theme.spacing(6),
  },
}));

WeatherContainer.propTypes = {
  listItems: PropTypes.array,
  value: PropTypes.string,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
  setTime: PropTypes.func,
  setTemp: PropTypes.func,
  page: PropTypes.number,
  pages: PropTypes.number,
};

export default WeatherContainer;
