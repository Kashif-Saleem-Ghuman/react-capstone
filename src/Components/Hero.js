import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/Country';

function Hero() {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covid);
  console.log('covidData:', covidData);

  useEffect(() => {
    dispatch(fetchData({ key: 'min_gdp', value: '100' }));
  }, [dispatch]);
  return (

    <>
      {covidData.data && covidData.data.map((item) => (
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          key={item.name}
          to="/details"
        >
          <div className="container">
            <h1 className="country-name">{item.name}</h1>
            <h3 className="country-area">
              {item.surface_area}
              <span>
                km
                <sup>2</sup>
              </span>
            </h3>
          </div>

        </NavLink>
      ))}
    </>
  );
}

export default Hero;
