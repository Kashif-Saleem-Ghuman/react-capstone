import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchData } from '../redux/slice/Country';
import HeaderDetails from './HeaderDetails';

function Details() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchData({ key: 'min_gdp', value: '100' }));
  }, [dispatch]);
  return (
    <>

      <HeaderDetails />
      <div className="stats">
        <div>COUNTRY DETAILS</div>
      </div>
      <table className="table table-details">
        <thead>
          <tr className="country-title">
            {location.state.name}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="key">REGION:</td>
            <td className="value">{location.state.region}</td>
          </tr>

          <tr>
            <td className="key">CAPITAL:</td>
            <td className="value">{location.state.capital}</td>
          </tr>

          <tr>
            <td className="key">EXPORTS:</td>
            <td className="value">{location.state.exports}</td>
          </tr>

          <tr>
            <td className="key">GDP GROWTH:</td>
            <td className="value">{location.state.gdp_growth}</td>
          </tr>

          <tr>
            <td className="key">GDP PER CAPITA:</td>
            <td className="value">{location.state.gdp_per_capita}</td>
          </tr>

          <tr>
            <td className="key">IMPORTS:</td>
            <td className="value">{location.state.imports}</td>
          </tr>

          <tr>
            <td className="key">POPULATION:</td>
            <td className="value">{location.state.population}</td>
          </tr>

          <tr>
            <td className="key">SURFACE AREA:</td>
            <td className="value">{location.state.surface_area}</td>
          </tr>
        </tbody>
      </table>

    </>
  );
}

export default Details;
