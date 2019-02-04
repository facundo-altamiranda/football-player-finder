import {
  GET_PLAYERS,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILURE,
  APPLY_FILTER,
} from '../actions/players';

const defaultState = {
  data: [],
  filters: {},
  isLoading: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return {
        ...state,
        filters: action.payload,
      };

    case GET_PLAYERS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GET_PLAYERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };

    case GET_PLAYERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};
