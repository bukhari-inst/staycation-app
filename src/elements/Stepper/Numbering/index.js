import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import './index.scss';

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = Object.keys(data);
  return (
    <Fade>
      <ol className={['stepper', className].join(' ')} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? 'active' : '';
          if (index + 1 === KeysOfData.length) {
            isActive = '';
            return null;
          }

          return <li className={[isActive].join(' ')}>{index + 1}</li>;
        })}
      </ol>
    </Fade>
  );
}

Numbering.PropTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  current: PropTypes.string,
};
