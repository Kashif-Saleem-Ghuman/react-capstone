import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLessThan, faMicrophone, faGear,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <>
    <div className="nav-bar">
      <div className="date-icon">
        <span className="less-than-symbol"><FontAwesomeIcon icon={faLessThan} /></span>
        <span className="year">
          2023
        </span>
      </div>

      <div className="weather">
        Covid-19 Stat&apos;s
      </div>
      <div className="mic-icon-wrapper">
        <span className="mic"><FontAwesomeIcon icon={faMicrophone} /></span>
        <span className="gear"><FontAwesomeIcon icon={faGear} /></span>
      </div>
    </div>

  </>
);

export default Header;
