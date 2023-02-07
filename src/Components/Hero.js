import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
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
      <div className="stats">
        <div>STATS BY COUNTRY</div>
      </div>

      <div className="wrapper">

        {covidData.data && covidData.data.map((item) => (
          <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            key={item}
            state={item}
            to="/details"
          >

            <div className="country-container">
              <div className="circle-arrow-right">
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>

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
      </div>
    </>
  );
}

export default Hero;
