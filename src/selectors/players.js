import { createSelector } from 'reselect';
import { getAge, includes } from '../helpers';

const playerSelector = ({ players: { data } }) => data.map(player => ({
  age: getAge(player.dateOfBirth),
  name: player.name,
  nationality: player.nationality,
  position: player.position,
}));

const filterSelector = ({ players: { filters } }) => filters;

const playersDataSelector = createSelector(
  playerSelector,
  filterSelector,
  (players, filters) => players.filter((player) => {
    const playerAge = !filters.age || player.age === Number(filters.age);
    const playerName = !filters.name || includes(player.name, filters.name);
    const playerPosition = !filters.position || player.position === filters.position;

    return playerAge && playerName && playerPosition;
  }),
);

export default playersDataSelector;
