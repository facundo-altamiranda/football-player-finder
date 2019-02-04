import React from 'react';
import { Col, Row } from 'antd';
import PlayersTable from '../../components/PlayersTable/PlayersTable';
import PlayersFilter from '../../components/PlayersFilter/PlayersFilter';

const Home = () => (
  <Row type="flex" justify="center">
    <Col span={16}>
      <h2>Football Player Finder</h2>
      <PlayersFilter />
      <PlayersTable />
    </Col>
  </Row>
);

export default Home;
