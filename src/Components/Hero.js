import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/Country';

function Hero() {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covid);
  console.log('covidData:', covidData);

  useEffect(() => {
    dispatch(fetchData('Pakistan'));
  }, [dispatch]);
  return (

    <>
      {covidData.data && covidData.data.map((item) => (
        <NavLink key={item.name} to="/details">
          <h1>{item.name}</h1>
        </NavLink>
      ))}
    </>
  );
}

export default Hero;
