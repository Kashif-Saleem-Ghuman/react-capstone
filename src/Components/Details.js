import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/Country';

function Details() {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covid);
  console.log('covidData:', covidData);

  useEffect(() => {
    dispatch(fetchData({ key: 'min_gdp', value: '100' }));
  }, [dispatch]);
  return (
    <div>Details</div>
  );
}

export default Details;
