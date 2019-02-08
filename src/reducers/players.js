import {
  APPLY_FILTER,
  GET_PLAYERS,
  GET_PLAYERS_FAILURE,
  GET_PLAYERS_SUCCESS,
} from '../actions/players';

const initialState = {
  data: [],
  filters: {},
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
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

    case GET_PLAYERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case GET_PLAYERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};
