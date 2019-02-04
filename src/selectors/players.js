import { createSelector } from 'reselect';
import moment from 'moment';

const playerSelector = ({ players: { data } }) => data.map(player => ({
  age: moment().diff(player.dateOfBirth, 'years'),
  name: player.name,
  nationality: player.nationality,
  position: player.position,
}));

const filterSelector = ({ players: { filters } }) => filters;

const playersDataSelector = createSelector(
  playerSelector,
  filterSelector,
  (players, filters) => players.filter((player) => {
    const playerAge = !filters.age
      || player.age === Number(filters.age);
    const playerName = !filters.name
      || player.name.toLowerCase().includes(filters.name.toLowerCase());
    const playerPosition = !filters.position
      || player.position === filters.position;

    return playerAge && playerName && playerPosition;
  }),
);

export default playersDataSelector;
