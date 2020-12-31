import React, { useState } from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix } = props;
  const [InputValue, SetInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patterNumeric = new RegExp('[0-9]*');
    const isNumeric = patterNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      SetInputValue(`${prefix}${value}${suffix}`);
    }
  };

  return <div></div>;
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: '',
  suffix: '',
};

Number,
  (propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
  });
