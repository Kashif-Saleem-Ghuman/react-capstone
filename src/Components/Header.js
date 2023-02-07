import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLessThan, faMicrophone, faGear,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
    <div className="nav-bar">
      <div className="date-icon">
        <NavLink to="/"><span className="less-than-symbol"><FontAwesomeIcon icon={faLessThan} /></span></NavLink>
        <span className="year">
          2023
        </span>
      </div>

      <div className="weather">
        Country Wise Stat&apos;s
      </div>
      <div className="mic-icon-wrapper">
        <span className="mic"><FontAwesomeIcon icon={faMicrophone} /></span>
        <span className="gear"><FontAwesomeIcon icon={faGear} /></span>
      </div>
    </div>

  </>
);

export default Header;
