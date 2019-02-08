import React from 'react';
import { mount } from 'enzyme';
import { Table } from 'antd';
import { PlayersTable } from './PlayersTable';

describe('PlayersTable', () => {
  const fetchPlayers = jest.fn();
  const players = [
    {
      age: 25,
      name: 'Romelu Lukaku',
      nationality: 'Belgium',
      position: 'Centre-Forward',
    },
    {
      age: 28,
      name: 'David de Gea',
      nationality: 'Spain',
      position: 'Keeper',
    },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PlayersTable players={players} fetchPlayers={fetchPlayers} />);
  });

  it('should render Table', () => {
    const table = wrapper.find(Table);

    expect(table).toHaveLength(1);
  });

  it('componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(fetchPlayers).toHaveBeenCalled();
  });
});
