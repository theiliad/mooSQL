// React-related
import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  IndexRoute,
  Redirect
} from "react-router-dom"
import PropTypes from "prop-types"
import { instanceOf } from "prop-types"
import { compose } from "redux"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// Networking
import axios from "axios"

// Antd
import { Layout } from "antd"
const { Header, Content, Sider } = Layout
import { Menu, Dropdown, Icon } from "antd"
const SubMenu = Menu.SubMenu;
import { Form, Input } from "antd"
import { Badge } from "antd"
import { Modal, Button } from 'antd'

// Components
import HomePageMalibu from '../_pages/Home/Home_Malibu'
import HomePageLA from '../_pages/Home/Home_LA'

import FooterComponent from './Footer'
import NotificationsComponent from './App/Notifications'

// Assets
import LOGO from "../img/logo.svg";

// Redux
// Actions
import { updateAuth } from "../__actions/auth";

// Pages
import NotFoundPage from '../_pages/404'
import ComponentsPage from '../_pages/Components'
import ComponentDemos from '../_data/component-demos'
import LoginPage from '../_pages/Login'

import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Nunito+Sans', 'Nunito:700']
  }
})


const HeaderComponent = ({ showSearchModal, signOut }) => (
  <Header id="header">
    <div className="container-fluid">
      <div className="header-right">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '69px' }}
        >
          <Menu.Item key="1" onClick={showSearchModal.bind(this, true)}>
            <Icon type="search" />
          </Menu.Item>

          <Menu.Item key="2" className="dropdown">
            <NotificationsComponent />
          </Menu.Item>
          
          <Menu.Item key="3">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="0">Edit Profile</Menu.Item>

                  <Menu.Item key="1">Account settings</Menu.Item>

                  <Menu.Divider />

                  <Menu.Item key="3" className="with-anchor">
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
              placement="bottomRight"
            >
              <a className="ant-dropdown-link" href="#">
                <Icon type="user" /> Alex <Icon type="down" />
              </a>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  </Header>
);

class App extends React.Component {
  state = {
    collapsed: true,
    searchVisible: false,
    searchResults: []
  }

  componentDidMount() {
    this.highlightCorrectMenuItem()

    this.props.history.listen(this.highlightCorrectMenuItem)
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

        if (item.name.toLowerCase().indexOf(query.toLowerCase()) > -1) results.push(item)
      })
    })

    this.setState({
      ...this.state,
      searchResults: results,
      searchQuery: query
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
        document.body.style.overflowY = 'scroll'
      })
    }
  }

  _signOut = () => {
    this.props.updateAuth(false)
  }

  highlightCorrectMenuItem = () => {
    const { pathname } = window.location
    const componentPath = pathname.replace("/components/", "")

    this.setState({
      ...this.state,
      navSelectedKey: `nav-${componentPath}`
    })
  }

  render() {
    const { loading, collapsed, searchVisible, searchResults, searchQuery, navSelectedKey } = this.state
        , { getFieldDecorator } = this.props.form
        , { isAuthenticated } = this.props.auth

    if (isAuthenticated)
      return (
        <Layout className="fullheight">
          <HeaderComponent
            showSearchModal={this._showSearchModal}
            signOut={this._signOut}
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
                  mode="inline"
                  inlineCollapsed={this.state.collapsed}
                  selectedKeys={[navSelectedKey]}
                >
                  <SubMenu
                      key={`compCategory-home`}
                      title={<span><Icon type='home' /><span>Home</span></span>}
                  >
                    <Menu.Item key='nav-/'>
                      <Link to='/'>
                        Home - Malibu
                      </Link>
                    </Menu.Item>

                    <Menu.Item key='nav-/la'>
                      <Link to='/la'>
                        Home - L.A.
                      </Link>
                    </Menu.Item>

                    <Menu.Item onClick={this._signOut}>
                      Login
                    </Menu.Item>
                  </SubMenu>

                  {ComponentDemos.map((compCategory, index) =>
                    <SubMenu
                      key={`compCategory-${index}`}
                      title={<span><Icon type={compCategory.icon} /><span>{compCategory.name}</span></span>}
                    >
                      {compCategory.items.map((item, i) =>
                        <Menu.Item key={`nav-${item.path}`}>
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
                  <Route path="/" component={HomePageMalibu} exact={true} />
                  <Route path="/la" component={HomePageLA} exact={true} />

                  <Route path="/components" component={ComponentsPage} exact={false} />

                  <Route path="*" exact={true} component={NotFoundPage} />
                </Switch>
              </div>

              <FooterComponent />
            </Content>
            
            {/*
              * Search Modal
            */}
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
                  {
                    const resultIndex = result.name.toLowerCase().indexOf(searchQuery)
                    return (
                      <Menu.Item key={`search-result-${index}`} onClick={this._showSearchModal.bind(this, false)}>
                        <Link to={`/components/${result.path}`}>
                          {result.name.substring(0, resultIndex)}
                          <span>{result.name.substring(resultIndex, resultIndex + searchQuery.length)}</span>
                          {result.name.substring(resultIndex + searchQuery.length)}
                        </Link>
                      </Menu.Item>
                    )
                  }
                )}
              </Menu>
            </Modal>
          </Layout>
        </Layout>
      );
    else
      return <LoginPage />
  }
}

App.propTypes = {
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateAuth,
    },
    dispatch
  )
}

export default compose(
  connect(
    state => ({
      auth: state.auth,
    }),
    mapDispatchToProps
  )
)(Form.create()(App))
