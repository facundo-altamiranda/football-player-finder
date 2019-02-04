import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import {
  Button,
  Col,
  Input,
  Row,
  Select,
} from 'antd';
import { applyFilter } from '../../actions/players';
import './PlayersFilter.scss';

const { Option } = Select;

class PlayersFilter extends Component {
  static propTypes = {
    applyFilter: func.isRequired,
  };

  state = {
    age: '',
    name: '',
    position: '',
  };

  onChange = (event) => {
    const { target: { name, value } } = event;

    this.setState({ [name]: value });
  }

  onSelectChange = (value) => {
    this.setState({ position: value });
  }

  onSubmit = () => {
    const { age, name, position } = this.state;
    const { applyFilter: applyFilters } = this.props;
    const filters = {
      age,
      name,
      position,
    };

    applyFilters(filters);
  }

  render() {
    const positionOptions = [
      {
        value: 'Attacking Midfield',
      },
      {
        value: 'Centre-Back',
      },
      {
        value: 'Centre-Forward',
      },
      {
        value: 'Central Midfield',
      },
      {
        value: 'Defensive Midfield',
      },
      {
        value: 'Keeper',
      },
      {
        value: 'Left-Back',
      },
      {
        value: 'Left Midfield',
      },
      {
        value: 'Left Wing',
      },
      {
        value: 'Right-Back',
      },
    ];

    return (
      <Row type="flex" justify="center" gutter={10} className="filters">
        <Col span={6} xl={7}>
          <Input name="name" placeholder="Player Name" onChange={this.onChange} onPressEnter={this.onSubmit} allowClear />
        </Col>
        <Col span={6} xl={7}>
          <Select name="position" className="selectPostion" placeholder="Position" onChange={this.onSelectChange} onDeselect={this.onSubmit} allowClear>
            {
              positionOptions.map(({ value }) => <Option value={value} key={value}>{value}</Option>)
            }
          </Select>
        </Col>
        <Col span={6} xl={7}>
          <Input name="age" placeholder="Age" onChange={this.onChange} onPressEnter={this.onSubmit} allowClear />
        </Col>
        <Col span={6} xl={3}>
          <Button block onClick={this.onSubmit}>
            { 'Search' }
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = ({ applyFilter });

export default connect(null, mapDispatchToProps)(PlayersFilter);
