import mockdate from 'mockdate';
import moment from 'moment';
import { getAge, includes } from './index';

describe('getAge', () => {
  beforeAll(() => {
    mockdate.set(moment('2019-02-08'));
  });

  afterAll(() => {
    mockdate.reset();
  });

  const dateOfBirth = '1993-06-02';

  it('should return the years based on the date of birth', () => {
    expect(getAge(dateOfBirth)).toEqual(25);
  });
});


describe('includes', () => {
  it('should return true if it includes the word', () => {
    expect(includes('Romelu Lukaku', 'RomeLU Lu')).toBe(true);
  });

  it('should return true if it does not includes the word', () => {
    expect(includes('Romelu Lukaku', 'RomeLUl Lu')).toBe(false);
  });
});
