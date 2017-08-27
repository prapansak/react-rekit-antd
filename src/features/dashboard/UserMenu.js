import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Avatar, Menu, Dropdown, Modal } from 'antd';

export class UserMenu extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object
  }

  onSelectMenu(e){
    if(e.key==1){
      Modal.info({
        title: 'This is a notification message',
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
        onOk() {},
      });
    }else if(e.key==2){
      this.context.router.history.push('/')
    }
  }

  renderMenu(name){
    return(
      <Menu onClick={(e)=>this.onSelectMenu(e)}>
        <Menu.Item>{name}</Menu.Item>
        <Menu.Divider />
        <Menu.Item key='1'>About</Menu.Item>
        <Menu.Item key='2'>Logout</Menu.Item>
      </Menu> 
    )
  }

  render() {
    return (
      <div className="dashboard-user-menu">
        <div className="user">
          <Dropdown overlay={this.renderMenu('John Doe')}>
            <Avatar icon="user"></Avatar>
          </Dropdown>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
