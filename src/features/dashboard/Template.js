import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './redux/actions';
import routeConfig from '../../common/routeConfig';
import { UserMenu } from './'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

export class Template extends Component {
  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props){
    super(props)
    this.state = {
      collapsed: true
    }
  }

  toggle(){
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  renderBreadcrumb(path){
    return(
      <Breadcrumb className="breadcrumb">
        {
          path.split("/").map((item, key)=>(
            <Breadcrumb.Item key={key}>{`${item.charAt(0).toUpperCase()}${item.slice(1)}`}</Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
    )
  }

  renderLinks(items) {
    let { pathname } = this.props.router.location
    pathname = pathname.split('/')[2]
    return (
      <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
        {
          items.map((route)=>{
            if(/^\/dashboard/.test(route.path)){
              return route.childRoutes.map((item, key)=>{
                if(!item.autoIndexRoute){
                  return (
                      <Menu.Item key={item.path}>
                        <Link to={`${route.path}/${item.path}`}>
                          <Icon type={item.icon} />
                          <span>{item.name}</span>
                        </Link>
                      </Menu.Item>
                  )
                }
              })
            }
          })
        }
      </Menu>
    );
  }

  render() {
    return (
      <div className="dashboard-template">
        <Layout className="layout">
          <Layout.Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            {this.renderLinks(routeConfig[0].childRoutes)}
          </Layout.Sider>
          <Layout>
            <Layout.Header className="header">
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={()=>this.toggle()}
              />
              <UserMenu />
            </Layout.Header>
            {this.renderBreadcrumb(this.props.router.location.pathname)}
            <Layout.Content className="content">
              {this.props.children}
            </Layout.Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
    router: state.router
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
