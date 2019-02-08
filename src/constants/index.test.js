import * as constants from './index';

describe('constants', () => {
  it('should match snapshot', () => {
    expect(constants).toMatchSnapshot();
  });
});
