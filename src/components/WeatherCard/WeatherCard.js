import React, { useState } from 'react';
import { Card, Typography, CardContent, makeStyles } from '@material-ui/core';
import WbCloudyRoundedIcon from '@material-ui/icons/WbCloudyRounded';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import LooksRoundedIcon from '@material-ui/icons/LooksRounded';
import PropTypes from 'prop-types';
import { timeConverterAMPM, formatDate } from '../../utils/helpers';

const WeatherCard = props => {
  const [borderClass, setBorderClass] = useState('');

  const { data, unit, setTime, setTemp } = props;

  const weatherI = data[1][0];
  const weatherItem = data[1];

  const handleSelect = () => {
    setBorderClass('4px solid #3f51b5');
    const temp = weatherItem?.map(item => item?.main?.temp);
    const time = weatherItem?.map(item =>
      timeConverterAMPM(new Date(item?.dt_txt))
    );
    setTemp(temp);
    setTime(time);
  };

  const useStyles = makeStyles(() => ({
    card: {
      height: 180,
      width: 280,
      backgroundColor: '#eee',
      cursor: 'pointer',
      border: borderClass,
    },
    title: {
      fontSize: 14,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    feat: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    temperature: {
      fontSize: 34,
      fontWeight: 'bold',
    },
    date: {
      fontSize: 18,
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={() => handleSelect()}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Temperature
        </Typography>
        <Typography
          className={classes.temperature}
          color="textSecondary"
          gutterBottom
        >
          {weatherI?.main?.temp}°{unit === 'metric' ? 'C' : 'F'}
        </Typography>
        <div className={classes.feat}>
          {weatherI?.weather[0]?.main === 'Clouds' ? (
            <>
              {' '}
              Cloudy <WbCloudyRoundedIcon />
            </>
          ) : null}
          {weatherI?.weather[0]?.main === 'Rain' ? (
            <>
              Rainy <LooksRoundedIcon />
            </>
          ) : null}
          {weatherI?.weather[0]?.main === 'Clear' ? (
            <>
              Clear <ClearAllIcon />
            </>
          ) : null}
        </div>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          Date: {formatDate(new Date(weatherI?.dt_txt))}
        </Typography>
      </CardContent>
    </Card>
  );
};

WeatherCard.propTypes = {
  unit: PropTypes.string,
};

export default WeatherCard;
