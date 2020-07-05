import { getModelData } from '../services/BatteryService';
import {
  SPEED_UP,
  SPEED_DOWN,
  TEMPERATURE_UP,
  TEMPERATURE_DOWN,
  CHANGE_CLIMATE,
  CHANGE_WHEEL
} from '../constants/actionTypes';

const initialState = {
  carstats: [
    { miles: 246, model: '60' },
    { miles: 250, model: '60D' },
    { miles: 297, model: '75' },
    { miles: 306, model: '75D' },
    { miles: 336, model: '90D' },
    { miles: 376, model: 'P100D' }
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  }
};

const updateStats = (state, newState) => {
  return {
    ...state,
    config: newState.config,
    carstats: calculateStats(newState)
  };
};

const calculateStats = (state) => {
  const models = ['60', '60D', '75', '75D', '90D', 'P100D'];
  const dataModels = getModelData();
  return models.map((model) => {
    const { speed, temperature, climate, wheels } = state.config;
    const miles =
      dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][
        temperature
      ];
    return {
      model,
      miles
    };
  });
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CLIMATE:
      const newChangeClimateState = {
        ...state,
        config: {
          climate: !state.config.climate,
          speed: state.config.speed,
          temperature: state.config.temperature,
          wheels: state.config.wheels
        }
      };
      return updateStats(state, newChangeClimateState);

    case SPEED_UP:
      const newSpeedUpState = {
        ...state,
        config: {
          climate: state.config.climate,
          speed: action.value + action.step,
          temperature: state.config.temperature,
          wheels: state.config.wheels
        }
      };
      return updateStats(state, newSpeedUpState);

    case SPEED_DOWN:
      const newSpeedDownState = {
        ...state,
        config: {
          climate: state.config.climate,
          speed: action.value - action.step,
          temperature: state.config.temperature,
          wheels: state.config.wheels
        }
      };
      return updateStats(state, newSpeedDownState);

    case TEMPERATURE_UP:
      const newTemperatureUpState = {
        ...state,
        config: {
          climate: state.config.climate,
          speed: state.config.speed,
          temperature: action.value + action.step,
          wheels: state.config.wheels
        }
      };
      return updateStats(state, newTemperatureUpState);

    case TEMPERATURE_DOWN:
      const newTemperatureDownState = {
        ...state,
        config: {
          climate: state.config.climate,
          speed: state.config.speed,
          temperature: action.value - action.step,
          wheels: state.config.wheels
        }
      };
      return updateStats(state, newTemperatureDownState);

    case CHANGE_WHEEL:
      const newChangeWheelState = {
        ...state,
        config: {
          climate: state.config.climate,
          speed: state.config.speed,
          temperature: state.config.temperature,
          wheels: action.value
        }
      };
      return updateStats(state, newChangeWheelState);

    default:
      return state;
  }
};

export default rootReducers;
