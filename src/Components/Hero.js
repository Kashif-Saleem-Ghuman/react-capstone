import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-bootstrap/Spinner';
import { fetchData } from '../redux/slice/Country';
import Header from './Header';
import Input from './Input';

function Hero() {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covid);
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      if (covidData.data === null) {
        shouldFetch.current = false;
        dispatch(fetchData({ key: 'min_gdp', value: '100' }));
      }
    }
  }, [covidData.data, dispatch]);
  let count = 0;

  return (
    <>
      <Header />
      <Input />
      <div className="stats">
        <div>STATS BY COUNTRY</div>
      </div>

      <div className="wrapper">
        {covidData.isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="info" />
          </div>
        ) : (

          covidData.data && covidData.data.map((item) => {
            count += 1;
            return (
              <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                key={count}
                state={item}
                to="/details"
              >
                <div className="country-container">
                  <div className="circle-arrow-right">
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                  </div>

                  <h1 className="country-name">{item.name}</h1>
                  <h3 className="country-area">
                    {item.gdp}
                    &nbsp;
                    <span>USD</span>
                  </h3>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </>
  );
}

export default Hero;
