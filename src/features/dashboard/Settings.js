import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

export class Settings extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="dashboard-settings">
        <Tabs defaultActiveKey="1" animated={false}>
          <TabPane tab={<span><Icon type="pie-chart" />Overview</span>} key="1">
            Tab 1
          </TabPane>
          <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
            Tab 2
          </TabPane>
        </Tabs>
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
)(Settings);
