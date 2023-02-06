import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/slice/covid';

function Hero() {
  const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.covidData);
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(fetchData());
  });

  // console.log(data);
  return (
    <>
      <NavLink to="/details">
        <h1>Pakistan</h1>
      </NavLink>
    </>
  );
}

export default Hero;
