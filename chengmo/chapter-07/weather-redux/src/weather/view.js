import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { LOADING, SUCCESS, FAILURE } from "./status";

const mapStateToProps = ({
  weather: { city, weather, temp1, temp2, status }
}) => {
  return {
    status,
    cityName: city,
    weather,
    lowestTemp: temp1,
    highestTemp: temp2
  };
};

const Weather = ({ status, cityName, weather, lowestTemp, highestTemp }) => {
  switch (status) {
    case LOADING:
      return <div>天气信息正在请求中。。。</div>;
    case SUCCESS:
      return (
        <div>
          {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}
        </div>
      );
    case FAILURE:
      return <div>天气信息获取失败。。。</div>;
    default:
      throw new Error("Unexpected status: ", status);
  }
};

Weather.propTypes = {
  status: PropTypes.string.isRequired,
  cityName: PropTypes.string,
  weather: PropTypes.string,
  lowestTemp: PropTypes.string,
  highestTemp: PropTypes.string
};

export default connect(mapStateToProps)(Weather);
