import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '../redux/reduces/home';


@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  getlist = () => {
    axios.get('https://oldpwatest.todaypocket.cn/mall/news/categoryList', {})
      .then((res) => {
        const {history, saveList} = this.props;
        saveList(res.data.result.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
    this.getlist();
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs');
  }
  gotoabout = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/about');
  }
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div className="home" style={{paddingTop: 100}}>
        <div onClick={this.gotoabout}>
          <img src={logo} className="logo" />
        </div>
        <div className={`center ${movelogo ? 'logo-move' : ''}`} onClick={this.handleBrowserChange}>
          <img src={logo} className="logo" />
          <h1>React Project</h1>
        </div>
        <div style={{width: '100%', margin: '0 auto'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
