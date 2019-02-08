import mockdate from 'mockdate';
import moment from 'moment';
import playersDataSelector from './players';

describe('playerListsSelector', () => {
  beforeAll(() => {
    mockdate.set(moment('2018-09-07'));
  });

  afterAll(() => {
    mockdate.reset();
  });

  it('should return filtered players', () => {
    const store = {
      players: {
        data: [
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
        ],
        filters: {
          age: 25,
          name: 'Romelu LU',
          position: 'Centre-Forward',
        },
      },
    };

    const expectedResult = [
      {
        age: 25,
        name: 'Romelu Lukaku',
        nationality: 'Belgium',
        position: 'Centre-Forward',
      },
    ];

    expect(playersDataSelector(store)).toEqual(expectedResult);
  });

  it('should return empty', () => {
    const store = {
      players: {
        data: [
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
        ],
        filters: {
          age: 26,
          name: 'Romelu LU',
          position: 'Centre-Forward',
        },
      },
    };

    const expectedResult = [];

    expect(playersDataSelector(store)).toEqual(expectedResult);
  });
});
