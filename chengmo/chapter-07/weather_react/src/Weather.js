import React, { Component } from "react";
const cityCode = 101010100;

// {"weatherinfo":{"city":"北京","cityid":"101010100","temp1":"18℃","temp2":"31℃","weather":"多云转阴","img1":"n1.gif","img2":"d2.gif","ptime":"18:00"}}

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: null
    };
  }

  componentDidMount() {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    fetch(apiUrl)
      .then(response => {
        console.log(response);
        if (response.status !== 200) {
          throw new Error(
            "Fail to get response with status " + response.status
          );
        }

        response
          .json()
          .then(response => {
            console.log(response.weatherinfo);
            this.setState({ weatherInfo: response.weatherinfo });
          })
          .catch(err => {
            console.log(err);
            this.setState({ weatherInfo: null });
          });
      })
      .then(err => {
        console.log(err);
        this.setState({ weatherInfo: null });
      });
  }

  render() {
    const { weatherInfo } = this.state;
    if (!weatherInfo) {
      return <div>暂无数据</div>;
    }
    const { city, weather, temp1, temp2 } = weatherInfo;
    return (
      <div>
        {city} {weather} 最低气温 {temp1} 最高气温 {temp2}
      </div>
    );
  }
}

export default Weather;
