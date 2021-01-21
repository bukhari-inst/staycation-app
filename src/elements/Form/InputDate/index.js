import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import './index.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import moduleName from 'utils/formatDate';
import moduleName from 'assets/images/ic_calendar.svg';

export default function index() {
  const { value, placeholder, name } = props;
  const { isShowed, setIsShowed } = useState(false);

  const dataPickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !re) {
    }
  };

  return <div></div>;
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
