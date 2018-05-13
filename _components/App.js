// React-related
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  IndexRoute,
  Redirect
} from "react-router-dom";
import PropTypes from "prop-types";
import { instanceOf } from "prop-types";
import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Networking
import axios from "axios";

// Antd
import { Layout } from "antd";
const { Header, Content, Sider } = Layout;
import { Menu, Dropdown, Icon } from "antd";
const SubMenu = Menu.SubMenu;
import { Form, Input } from "antd";
import { Badge } from "antd"
import { Modal, Button } from 'antd'

// Components
import HomeComponent from "./Home"
import FooterComponent from './Footer'

// Assets
import LOGO from "../img/logo.svg";

// Redux
// Actions
import { updateAuth } from "../__actions/auth";
import { updateLang } from "../__actions/localization";

// Pages
import ComponentsPage from '../_pages/Components'

import ComponentDemos from '../_data/component-demos'

import WebFont from 'webfontloader';
import { ETIME } from "constants";

WebFont.load({
  google: {
    families: ['Nunito+Sans', 'Nunito:700']
  }
});

const HeaderComponent = ({ showSearchModal }) => (
  <Header id="header">
    <div className="container-fluid">
      {true && (
        <div className="header-right">
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '69px' }}
          >
            <Menu.Item key="1" onClick={showSearchModal.bind(this, true)}>
              <Icon type="search" />
            </Menu.Item>

            <Menu.Item key="2">
              <Badge count={5}>
                <Icon type="bell" />
              </Badge>
            </Menu.Item>
            
            <Menu.Item key="3">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="0">
                      <a
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          updateLang("en-ca");
                        }}
                      >
                        English (Canada)
                      </a>
                    </Menu.Item>

                    <Menu.Item key="1">
                      <a
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          updateLang("fr-ca");
                        }}
                      >
                        French (Canada)
                      </a>
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Item key="3">
                      <a
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          signOut();
                        }}
                      >
                        <Icon type="logout" /> Sign Out
                      </a>
                    </Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
                <a className="ant-dropdown-link" href="#">
                  <Icon type="user" /> Alex <Icon type="down" />
                </a>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </div>
  </Header>
);

class App extends React.Component {
  state = {
    collapsed: true,
    searchVisible: false,
    searchResults: []
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  _searchComponents = (e) => {
    const { value: query } = e.target
    const results = []

    ComponentDemos.map(compCategory => {
      if (results.length === 5) return null
 
      compCategory.items.map(item => {
        if (results.length === 5) return null

        if (item.name.indexOf(query) > -1) results.push(item)
      })
    })

    this.setState({
      ...this.state,
      searchResults: results
    })
  }

  _showSearchModal = (show) => {
    this.setState({
      ...this.state,
      searchVisible: show
    })

    if (show) {
      setTimeout(() => {
        this.searchInput.focus()
      })
    }
  }

  render() {
    const { loading, collapsed, searchVisible, searchResults } = this.state
        , { getFieldDecorator } = this.props.form
        , auth = { isAuthenticated: true }

    if (auth.isAuthenticated)
      return (
        <Layout className="fullheight">
          <HeaderComponent
            toggleCollapsed={this.toggleCollapsed}
            showSearchModal={this._showSearchModal}
          />

          <Layout>
            <Sider
              id="app-sidebar"
              collapsible
              collapsed={collapsed}
              onCollapse={this.toggleCollapsed}
            >
              <div className="logo">
                <Link to="/">
                  <img src={LOGO} />
                </Link>
              </div>
              <div className="side-menu">
                <Menu
                  defaultSelectedKeys={['1']}
                  // defaultOpenKeys={['sub1']}
                  mode="inline"
                  inlineCollapsed={this.state.collapsed}
                  activeKey={window.location.pathname}
                >
                  {/* <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                  </Menu.Item>

                  <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                  </Menu.Item>

                  <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Option 3</span>
                  </Menu.Item> */}

                  <Menu.Item key="3">
                    <Link to='/'>
                      <Icon type="home" />
                      <span>Home</span>
                    </Link>
                  </Menu.Item>

                  {ComponentDemos.map((compCategory, index) =>
                    <SubMenu
                      key={`compCategory-${index}`}
                      title={<span><Icon type={compCategory.icon} /><span>{compCategory.name}</span></span>}
                    >
                      {compCategory.items.map((item, i) =>
                        <Menu.Item key={`comp-nav-${item.path}`}>
                          <Link to={`/components/${item.path}`}>
                            {item.name}
                          </Link>
                        </Menu.Item>
                      )}
                    </SubMenu>
                  )}
                </Menu>
              </div>
            </Sider>

            <Content id="app-content" className={collapsed && 'wide'}>
              <div className="content-wrapper container">
                <Switch>
                  <Route path="/" component={HomeComponent} exact={true} />

                  <Route path="/components" component={ComponentsPage} exact={false} />

                  {/* <Route path="*" exact={true} component={NotFoundComponent} /> */}
                </Switch>
              </div>

              <FooterComponent />
            </Content>

            <Modal
              visible={this.state.searchVisible}
              title={null}
              footer={null}
              className="search-modal"
              onCancel={this._showSearchModal.bind(this, false)}
            >
              <Input
                placeholder="Search Components"
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={this._searchComponents}
                ref={searchInput => this.searchInput = searchInput}
              />

              <Menu
              >
                {searchResults.map((result, index) =>
                  <Menu.Item key={`search-result-${index}`} onClick={this._showSearchModal.bind(this, false)}>
                    <Link to={`/components/${result.path}`}>
                      {result.name}
                    </Link>
                  </Menu.Item>
                )}
              </Menu>
            </Modal>
          </Layout>
        </Layout>
      );
    else
      return (
        <Layout className="layout">
          <HeaderComponent />

          <div className="container">
            <h3 className="marginTop-30">Sign In</h3>
          </div>
        </Layout>
      );
  }
}

App.propTypes = {
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateAuth,
      updateLang
    },
    dispatch
  );
}

export default compose(
  connect(
    state => ({
      auth: state.auth,
      localization: state.localization
    }),
    mapDispatchToProps
  )
)(Form.create()(App));
