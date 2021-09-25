import React, { useEffect, useState } from 'react';
import './WeatherHome.scss';
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  makeStyles,
} from '@material-ui/core';
import CustomButton from '../../components/Button/Button';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';
import { Bar } from 'react-chartjs-2';
import { options } from '../../data';
import { connect } from 'react-redux';
import { getWeatherDetails } from '../../redux/actions/weather.actions';
import useMediaQuery from '@mui/material/useMediaQuery';
import PageLoader from '../../components/PageLoader/PageLoader';
import { filterListItems } from '../../utils/helpers';
import Error from '../../components/Error/Error';

const WeatherHome = ({ getWeatherDetails }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const [value, setValue] = useState('metric');

  const [perPage, setPerpage] = useState(3);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  const [temp, setTemp] = useState('');
  const [time, setTime] = useState('');

  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const getAllData = async () => {
    try {
      setLoading(true);
      let res = await getWeatherDetails(value);
      const groupData = filterListItems(res?.payload?.data?.list, 'dt_txt');
      const reslist = Object.entries(groupData);
      setLists(reslist);
      setPages(Math.ceil(lists?.length / perPage));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (matches) {
      setPerpage(1);
    }
    getAllData();
  }, [value, perPage, matches]);

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    const actualPage = page + 1;
    if (actualPage < pages) {
      setPage(page + 1);
    }
  };

  const refreshData = () => {
    getAllData();
  };

  const listItems = lists.slice(page * perPage, (page + 1) * perPage);

  const chartData = {
    labels: time,
    datasets: [
      {
        label: 'Temperature',
        data: temp,
        backgroundColor: '#3f51b5',
        color: 'white',
      },
    ],
  };

  if (loading) return <PageLoader />;
  if (error) return <Error />;

  return (
    <div className="weather__wrapper">
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <RadioGroup
            aria-label="temperature"
            name="temperature"
            className={classes.radioGroup}
            value={value}
            onChange={handleInputChange}
          >
            <FormControlLabel
              id="celsius"
              value="metric"
              control={<Radio color="primary" />}
              label="Celsius"
            />
            <FormControlLabel
              id="fahrenheit"
              value="imperial"
              control={<Radio color="primary" />}
              label="Fahrenheit"
            />
          </RadioGroup>
          <CustomButton title="refresh" onClick={() => refreshData()} />
        </Grid>
      </Grid>
      <WeatherContainer
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        listItems={listItems}
        value={value}
        page={page}
        pages={pages}
        setTemp={setTemp}
        setTime={setTime}
      />
      <Bar data={chartData} options={options} />
    </div>
  );
};
const useStyles = makeStyles(() => ({
  radioGroup: {
    flexDirection: 'row',
  },
}));

export default connect(null, { getWeatherDetails })(WeatherHome);
