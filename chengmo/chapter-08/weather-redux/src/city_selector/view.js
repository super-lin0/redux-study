import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { actions as weatherActions } from "../weather/";

const CITY_CODES = {
  北京: 101010100,
  上海: 101020100,
  广州: 101280101,
  深圳: 101280601
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectCity: cityCode => dispatch(weatherActions.fetchWeather(cityCode))
  };
};

class CitySelector extends Component {
  componentDidMount() {
    const defaultCodes = Object.keys(CITY_CODES)[0];
    this.props.onSelectCity(CITY_CODES[defaultCodes]);
  }
  onChange = ev => {
    const cityCode = ev.target.value;
    this.props.onSelectCity(cityCode);
  };

  render() {
    return (
      <select onChange={this.onChange}>
        {Object.keys(CITY_CODES).map(cityName => (
          <option key={cityName} value={CITY_CODES[cityName]}>
            {cityName}
          </option>
        ))}
      </select>
    );
  }
}

CitySelector.propTypes = {
  onSelectCity: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(CitySelector);
