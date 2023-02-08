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
        <NavLink to="/"><span className="less-than-symbol"><FontAwesomeIcon icon={faLessThan} className="fa-thin" /></span></NavLink>
      </div>

      <div className="weather">
        COUNTRY STATS
      </div>
      <div className="mic-icon-wrapper">
        <span className="mic"><FontAwesomeIcon icon={faMicrophone} className="fa-thin" /></span>
        <span className="gear"><FontAwesomeIcon icon={faGear} className="fa-thin" /></span>
      </div>
    </div>

  </>
);

export default Header;
