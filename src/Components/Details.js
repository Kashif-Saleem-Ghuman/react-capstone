import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchData } from '../redux/slice/Country';

function Details() {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log('location:', location.state);
  const covidData = useSelector((state) => state.covid);
  console.log('covidData:', covidData);

  useEffect(() => {
    dispatch(fetchData({ key: 'min_gdp', value: '100' }));
  }, [dispatch]);
  return (
    <>

      <div key={location.state}>{location.state.capital}</div>

    </>
  );
}

export default Details;
