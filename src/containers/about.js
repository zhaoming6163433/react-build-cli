import React, {Component} from 'react';
import Documentation from '~/components/documentation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class About extends Component {
  state = {
    list: []
  };
  componentWillMount() {
    const {home: {mylist}} = this.props;
    this.setState({list: mylist});
  }
  componentWillUnmount() {
  }
  render() {
    const {list} = this.state;
    return (
      list.map(item => (
        <div key={item.id} className="about">
          <span >{item.title}</span>
          <img src={item.icon} />
        </div>
      ))
    );
  }
}

export default About;
