import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'antd';
import Home from './Home';
import PlayersFilter from '../../components/PlayersFilter/PlayersFilter';
import PlayersTable from '../../components/PlayersTable/PlayersTable';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render Home', () => {
    expect(wrapper).toHaveLength(1);
  });

  describe('render components', () => {
    let row;

    beforeEach(() => {
      row = wrapper.find(Row);
    });

    it('should render a Row component', () => {
      expect(row).toHaveLength(1);
    });

    it('should have prop type equals flex and justify equals center', () => {
      expect(row.prop('type')).toEqual('flex');
      expect(row.prop('justify')).toEqual('center');
    });

    describe('render Col', () => {
      let col;

      beforeEach(() => {
        col = row.find(Col);
      });

      it('should render Col', () => {
        expect(col).toHaveLength(1);
      });

      it('should have prop span equals 20', () => {
        expect(col.prop('span')).toEqual(20);
      });

      describe('render h2', () => {
        let h2;

        beforeEach(() => {
          h2 = col.find('h2');
        });

        it('should render h2', () => {
          expect(h2).toHaveLength(1);
        });

        it('should have prop className equals title', () => {
          expect(h2.prop('className')).toEqual('title');
        });

        it('should have text equals Football Player Finder', () => {
          const text = h2.text();

          expect(text).toEqual('Football Player Finder');
        });
      });

      describe('render PlayersFilter', () => {
        let playersFilter;

        beforeEach(() => {
          playersFilter = col.find(PlayersFilter);
        });

        it('should render PlayersFilter', () => {
          expect(playersFilter).toHaveLength(1);
        });
      });

      describe('render PlayersTable', () => {
        let playersTable;

        beforeEach(() => {
          playersTable = col.find(PlayersTable);
        });

        it('should render PlayersTable', () => {
          expect(playersTable).toHaveLength(1);
        });
      });
    });
  });
});
