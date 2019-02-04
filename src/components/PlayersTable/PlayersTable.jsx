import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import {
  arrayOf,
  func,
  number,
  shape,
  string,
} from 'prop-types';
import playersDataSelector from '../../selectors/players';
import { fetchGetPlayers } from '../../actions/players';

class PlayersTable extends Component {
  static propTypes = {
    fetchGetPlayers: func.isRequired,
    players: arrayOf(shape({
      age: number,
      name: string,
      nationality: string,
      position: string,
    })).isRequired,
  };

  componentDidMount() {
    const { fetchGetPlayers: getPlayers } = this.props;
    getPlayers();
  }

  render() {
    const { players } = this.props;
    const columns = [{
      title: 'Player',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    }, {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }];

    return (
      <Table columns={columns} dataSource={players} bordered rowKey="name" />
    );
  }
}

const mapToStateProps = state => ({ players: playersDataSelector(state) });
const mapDispatchToProps = ({ fetchGetPlayers });

export default connect(mapToStateProps, mapDispatchToProps)(PlayersTable);
