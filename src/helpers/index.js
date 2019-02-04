import moment from 'moment';

export const getAge = dateOfBirth => (moment().diff(dateOfBirth, 'years'));

export const includes = (player, filter) => player.toLowerCase().includes(filter.toLowerCase());
