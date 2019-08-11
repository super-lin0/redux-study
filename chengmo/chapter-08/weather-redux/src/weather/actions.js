import { FETCH_FAILURE, FETCH_STARTED, FETCH_SUCCESS } from "./actionTypes";

export const fetchWeatherStart = () => ({ type: FETCH_STARTED });

export const fetchWeatherSuccess = result => ({ type: FETCH_SUCCESS, result });

export const fetchWeatherFailure = error => ({ type: FETCH_FAILURE, error });

let nextSeqId = 0;

export const fetchWeather = cityCode => dispatch => {
  // const apiUrl = "./weather.json";
  const apiUrl = `/data/cityinfo/${cityCode}.html`;

  const seqId = ++nextSeqId;

  const dispatchIfValid = action => {
    if (seqId === nextSeqId) {
      return dispatch(action);
    }
  };

  dispatchIfValid(fetchWeatherStart);

  return fetch(apiUrl)
    .then(response => {
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Fail to get response with status " + response.status);
      }

      response
        .json()
        .then(response => {
          console.log(response.weatherinfo);
          dispatchIfValid(fetchWeatherSuccess(response.weatherinfo));
        })
        .catch(err => {
          console.log(err);
          dispatchIfValid(fetchWeatherFailure(err));
        });
    })
    .then(err => {
      console.log(err);
      dispatchIfValid(fetchWeatherFailure(err));
    });
};
