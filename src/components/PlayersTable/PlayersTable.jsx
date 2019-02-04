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
import { fetchPlayers } from '../../actions/players';
import { TABLE_COLUMNS } from '../../constants';

class PlayersTable extends Component {
  static propTypes = {
    fetchPlayers: func.isRequired,
    players: arrayOf(shape({
      age: number,
      name: string,
      nationality: string,
      position: string,
    })).isRequired,
  };

  componentDidMount() {
    const { fetchPlayers: getPlayers } = this.props;
    getPlayers();
  }

  render() {
    const { players } = this.props;

    return (
      <Table columns={TABLE_COLUMNS} dataSource={players} bordered rowKey="name" />
    );
  }
}

const mapToStateProps = state => ({ players: playersDataSelector(state) });
const mapDispatchToProps = ({ fetchPlayers });

export default connect(mapToStateProps, mapDispatchToProps)(PlayersTable);
