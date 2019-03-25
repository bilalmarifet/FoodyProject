import { EVENT_DATA_HOME_GET_SUCCESS,LOCATİON_CHANGE } from '../Actions/types';


const INITIAL_STATE = {
data:'',
latitude:'',
longtitude:''

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATİON_CHANGE:
    return {...state,[action.payload.props]:action.payload.value};
    case EVENT_DATA_HOME_GET_SUCCESS:
    return {...state,data:action.payload};
    default:
      return state;
  }
};
