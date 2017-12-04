import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  totalValue: 0,
  hasError: false,
  errorMessage: null
}

export default function(state = initialState, action) {

  switch(action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, {
        isFetching: true,
        data: null,
        totalValue: null,
        hasError: false,
        errorMessage: null
      });

    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, {
        isFetching: false,
        data: action.payload,
        totalValue: action.totalValue,
        hasError: false,
        errorMessage: null
      });

    case FETCHING_COIN_DATA_FAIL:
      return Object.assign({}, {
        isFetching: false,
        data: null,
        totalValue: null,
        hasError: true,
        errorMessage: action.err
      });

    default:
      return state;
  }
}
