import TYPE from '../config/type';

export default function(state = [], action) {
  switch(action.type) {
  case TYPE.fetch_weather:
    return [ action.payload.data, ...state ]
  }

  return state;
}
