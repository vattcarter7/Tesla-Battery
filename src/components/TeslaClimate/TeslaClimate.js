import React from 'react';
import PropTypes from 'prop-types';

import './TeslaClimate.scss';

const TeslaClimate = (props) => (
  <div className='tesla-climate'>
    <label
      className={`tesla-climate__item ${
        props.value ? 'tesla-climate__item--active' : ''
      }  ${!props.limit ? 'tesla-heat' : ''}`}
    >
      <p>
        {props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}
      </p>
      <i className='tesla-climate__icon'></i>
      <input
        type='checkbox'
        name='climate'
        checked={props.value}
        onChange={() => {
          props.handleChangeClimate();
        }}
      />
    </label>
  </div>
);

TeslaClimate.propTypes = {
  value: PropTypes.bool.isRequired,
  limit: PropTypes.bool.isRequired,
  handleChangeClimate: PropTypes.func.isRequired
};

export default TeslaClimate;
