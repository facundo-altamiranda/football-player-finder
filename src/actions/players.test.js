import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  applyFilter,
  fetchPlayers,
  APPLY_FILTER,
  GET_PLAYERS,
  GET_PLAYERS_FAILURE,
  GET_PLAYERS_SUCCESS,
} from './players';
import { API_URL } from '../constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch players', () => {
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

    fetchMock.getOnce(API_URL, {
      body: payload,
      headers: {
        'content-type': 'application/json',
      },
    });

    const expectedActions = [
      { type: GET_PLAYERS },
      { type: GET_PLAYERS_SUCCESS, payload },
    ];
    const store = mockStore(
      {
        players: {
          data: [],
          filters: {},
          isLoading: true,
          error: null,
        },
      },
    );

    return store.dispatch(fetchPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should throw an error', () => {
    fetchMock.getOnce(API_URL, {
      throws: {
        message: 'error',
      },
    });

    const expectedActions = [
      { type: GET_PLAYERS },
      {
        type: GET_PLAYERS_FAILURE,
        payload: {
          message: 'error',
        },
      },
    ];
    const store = mockStore(
      {
        players: {
          data: [],
          filters: {},
          isLoading: true,
          error: null,
        },
      },
    );

    return store.dispatch(fetchPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('filters', () => {
  it('should create an action to apply filters', () => {
    const payload = {
      age: 26,
      name: 'Romelu',
      position: 'Centre-Forward',
    };
    const expectedAction = {
      type: APPLY_FILTER,
      payload,
    };

    expect(applyFilter(payload)).toEqual(expectedAction);
  });
});
