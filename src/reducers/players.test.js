import players from './players';
import { APPLY_FILTER, GET_PLAYERS, GET_PLAYERS_FAILURE, GET_PLAYERS_SUCCESS } from '../actions/players';

describe('players reducer', () => {
  const initialState = {
    data: [],
    filters: {},
    isLoading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(players(undefined, {})).toEqual(initialState);
  });

  describe('should handle action with type APPLY_FILTER', () => {
    let result;
    const action = {
      type: APPLY_FILTER,
      payload: {
        age: 26,
        name: 'Romelu',
        position: 'Centre-Forward',
      },
    };
    const expected = {
      ...initialState,
      ...{
        filters: {
          age: 26,
          name: 'Romelu',
          position: 'Centre-Forward',
        },
      },
    };

    beforeEach(() => {
      result = players(initialState, action);
    });

    it('should have filters', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('should handle action with type GET_PLAYERS', () => {
    let result;

    const action = {
      type: GET_PLAYERS,
    };
    const expected = { ...initialState, ...{ isLoading: true } };

    beforeEach(() => {
      result = players(initialState, action);
    });

    it('should have isLoading equals true', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('should handle action with type GET_PLAYERS_FAILURE', () => {
    let result;

    const currentState = {
      data: [],
      filters: {},
      isLoading: true,
      error: null,
    };
    const action = {
      type: GET_PLAYERS_FAILURE,
      payload: {},
    };
    const expected = { ...currentState, ...{ error: {}, isLoading: false } };

    beforeEach(() => {
      result = players(currentState, action);
    });

    it('should have error and isLoading equals false ', () => {
      expect(result).toEqual(expected);
    });
  });

  describe('should handle action with type GET_PLAYERS_SUCCESS', () => {
    let result;

    const currentState = {
      data: [],
      filters: {},
      isLoading: true,
      error: null,
    };
    const payload = [
      {
        dateOfBirth: '1993-05-13',
        name: 'Romelu Lukaku',
        nationality: 'Belgium',
        position: 'Centre-Forward',
      },
      {
        dateOfBirth: '1990-11-07',
        name: 'David de Gea',
        nationality: 'Spain',
        position: 'Keeper',
      },
    ];
    const action = {
      type: GET_PLAYERS_SUCCESS,
      payload,
    };
    const expected = { ...currentState, ...{ data: payload, isLoading: false } };

    beforeEach(() => {
      result = players(currentState, action);
    });

    it('should have data loaded and isLoading equals false', () => {
      expect(result).toEqual(expected);
    });
  });
});
