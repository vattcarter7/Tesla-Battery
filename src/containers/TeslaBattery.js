import React from 'react';
import './TeslaBattery.scss';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    };
  }

  render() {
    return (
      <form className='tesla-battery'>
        <h1>Range Per Charge</h1>
        <TeslaNotice />
      </form>
    );
  }
}
export default TeslaBattery;
