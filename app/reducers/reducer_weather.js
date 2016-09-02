import TYPE from '../config/type';

export default function(state = null, action) {
  switch(action.type) {
  case TYPE.fetch_weather:
    return action.payload.data
  }

  return state;
}
