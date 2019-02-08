import React from 'react';
import { shallow } from 'enzyme';
import { Button, Input, Select } from 'antd';
import { PlayersFilter } from './PlayersFilter';

describe('PlayersFilter', () => {
  const applyFilter = jest.fn();
  let wrapper;
  let input;
  let select;
  let button;
  let state;

  beforeEach(() => {
    wrapper = shallow(<PlayersFilter applyFilter={applyFilter} />);
    input = wrapper.find(Input);
    select = wrapper.find(Select);
    button = wrapper.find(Button);
  });

  it('should render components', () => {
    expect(input).toHaveLength(2);
    expect(button).toHaveLength(1);
    expect(select).toHaveLength(1);
  });

  it('should change name to lukaku', () => {
    input.at(0).simulate('change', { target: { name: 'name', value: 'lukaku' } });
    expect(wrapper.state().name).toEqual('lukaku');
  });

  it('should change position to Centre-Forward', () => {
    select.simulate('change', 'Centre-Forward');
    expect(wrapper.state().position).toEqual('Centre-Forward');
  });

  it('should change age to 25 ', () => {
    input.at(1).simulate('change', { target: { name: 'age', value: '25' } });
    expect(wrapper.state().age).toEqual('25');
  });

  beforeEach(() => {
    state = {
      age: 25,
      name: 'Lukaku',
      position: 'Centre-Forward',
    };
    wrapper.setState(state);
  });

  it('should submit with state', () => {
    button.simulate('click');
    expect(applyFilter).toHaveBeenCalledTimes(1);
    expect(applyFilter).toHaveBeenCalledWith(state);
  });
});
