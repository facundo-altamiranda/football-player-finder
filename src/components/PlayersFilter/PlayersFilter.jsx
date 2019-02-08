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
import { POSITION_OPTIONS } from '../../constants';
import './PlayersFilter.scss';

const { Option } = Select;

class PlayersFilter extends Component {
  static propTypes = {
    applyFilter: func.isRequired,
  };

  state = {
    age: undefined,
    name: undefined,
    position: undefined,
  };

  onChange = (name, value) => {
    this.setState({ [name]: value });
  }

  onNameChange = (event) => {
    const { target: { name, value } } = event;
    const onlyLetters = /^[a-zA-Z]+$/;

    if (onlyLetters.test(value) || value === '') {
      this.onChange(name, value);
    }
  }

  onNumberChange = (event) => {
    const { target: { name, value } } = event;
    const oneNumberRegex = /([1-4])/;
    const fullRegex = /(1[89]|[23][0-9]|4[0])/;

    if (value === '' || ((value && value.length < 2) && oneNumberRegex.test(value)) || ((value && value.length === 2) && fullRegex.test(value))) {
      this.onChange(name, value);
    }
  }

  onPositionChange = value => this.onChange('position', value);

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
    const { age, name, position } = this.state;

    return (
      <Row type="flex" justify="center" gutter={10} className="filters">
        <Col span={6} xl={7}>
          <Input name="name" placeholder="Player Name" onChange={this.onNameChange} value={name} onPressEnter={this.onSubmit} allowClear />
        </Col>
        <Col span={6} xl={7}>
          <Select name="position" className="full-width" placeholder="Position" onChange={this.onPositionChange} value={position} onDeselect={this.onSubmit} allowClear>
            {
              POSITION_OPTIONS.map(({ value }) => <Option value={value} key={value}>{value}</Option>)
            }
          </Select>
        </Col>
        <Col span={6} xl={7}>
          <Input name="age" placeholder="Age" type="number" min={18} max={40} onChange={this.onNumberChange} value={age} onPressEnter={this.onSubmit} allowClear />
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
