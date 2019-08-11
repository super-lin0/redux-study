import { FETCH_FAILURE, FETCH_STARTED, FETCH_SUCCESS } from "./actionTypes";

// export const fetchWeatherStart = () => ({ type: FETCH_STARTED });

// export const fetchWeatherSuccess = result => ({ type: FETCH_SUCCESS, result });

// export const fetchWeatherFailure = error => ({ type: FETCH_FAILURE, error });

export const fetchWeather = cityCode => {
  const apiUrl = `/data/cityinfo/${cityCode}.html`;

  // dispatch(fetchWeatherStart);

  return {
    promise: fetch(apiUrl).then(response => {
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Fail to get response with status " + response.status);
      }

      return response.json().then(response => {
        console.log(response.weatherinfo);
        return response.weatherinfo;
      });
    }),
    types: [FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE]
  };

  // return fetch(apiUrl)
  //   .then(response => {
  //     console.log(response);
  //     if (response.status !== 200) {
  //       throw new Error("Fail to get response with status " + response.status);
  //     }

  //     response
  //       .json()
  //       .then(response => {
  //         console.log(response.weatherinfo);
  //         dispatch(fetchWeatherSuccess(response.weatherinfo));
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         dispatch(fetchWeatherFailure(err));
  //       });
  //   })
  //   .then(err => {
  //     console.log(err);
  //     dispatch(fetchWeatherFailure(err));
  //   });
};
