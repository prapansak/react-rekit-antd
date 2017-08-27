import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Link } from 'react-router-dom'
import { Layout, Menu, Row, Col, Button, Icon } from 'antd';

export class Template extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Layout className="home-template">
        <Layout.Header className="header">
          <Row>
            <Col span={20} className='logo'>
              <Icon type="line-chart" />
              <div className='title'>TEXT</div>
            </Col>
            <Col span={4} className="navigate">
              <Link to="/dashboard/documents"><Button>Sign in</Button></Link>
            </Col>
          </Row>
        </Layout.Header>
        <Layout.Content className="content">
          {this.props.children}
        </Layout.Content>
        <Layout.Footer className="footer">
          React-Rekit-Antd ©2017 Created by Prapansak
        </Layout.Footer>
      </Layout>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
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
)(Template);
