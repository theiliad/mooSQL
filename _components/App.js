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
import { Layout, Breadcrumb } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { Menu, Dropdown, Icon } from "antd";
import { Input } from "antd";
import { Button, Radio } from "antd";
import { Form, Checkbox } from "antd";
const FormItem = Form.Item;
import { message } from "antd";
const SubMenu = Menu.SubMenu;

// Components
import HomeComponent from "./Home"

// Assets
import LOGO from "../img/logo.svg";

// Redux
// Actions
import { updateAuth } from "../__actions/auth";
import { updateLang } from "../__actions/localization";

// Pages
import AffixDemo from '../_pages/components/affix/index.js'
import AlertDemo from '../_pages/components/alert/index.js'
import AnchorDemo from '../_pages/components/anchor/index.js'
import AutoCompleteDemo from '../_pages/components/auto-complete/index.js'
import AvatarDemo from '../_pages/components/avatar/index.js'
import BackTopDemo from '../_pages/components/back-top/index.js'
import BadgeDemo from '../_pages/components/badge/index.js'
// import BreadcrumbDemo from '../_pages/components/breadcrumb/index.js'
import ButtonDemo from '../_pages/components/button/index.js'
import CalendarDemo from '../_pages/components/calendar/index.js'
import CardDemo from '../_pages/components/card/index.js'
import CarouselDemo from '../_pages/components/carousel/index.js'
// import CascaderDemo from '../_pages/components/cascader/index.js'
import CheckboxDemo from '../_pages/components/checkbox/index.js'
import CollapseDemo from '../_pages/components/collapse/index.js'
// import DatePickerDemo from '../_pages/components/date-picker/index.js'
import DividerDemo from '../_pages/components/divider/index.js'
import DropdownDemo from '../_pages/components/dropdown/index.js'
import FormDemo from '../_pages/components/form/index.js'
import GridDemo from '../_pages/components/grid/index.js'
import InputDemo from '../_pages/components/input/index.js'
import InputNumberDemo from '../_pages/components/input-number/index.js'
// import LayoutDemo from '../_pages/components/layout/index.js'
import ListDemo from '../_pages/components/list/index.js'
import LocaleProviderDemo from '../_pages/components/locale-provider/index.js'
import MentionDemo from '../_pages/components/mention/index.js'
import MenuDemo from '../_pages/components/menu/index.js'
import MessageDemo from '../_pages/components/message/index.js'
// import ModalDemo from '../_pages/components/modal/index.js'
// import NotificationDemo from '../_pages/components/notification/index.js'
import PaginationDemo from '../_pages/components/pagination/index.js'
import PopconfirmDemo from '../_pages/components/popconfirm/index.js'
import PopoverDemo from '../_pages/components/popover/index.js'
import ProgressDemo from '../_pages/components/progress/index.js'
import RadioDemo from '../_pages/components/radio/index.js'
import RateDemo from '../_pages/components/rate/index.js'
import SelectDemo from '../_pages/components/select/index.js'
import SliderDemo from '../_pages/components/slider/index.js'
import SpinDemo from '../_pages/components/spin/index.js'
import StepsDemo from '../_pages/components/steps/index.js'
import SwitchDemo from '../_pages/components/switch/index.js'
import TableDemo from '../_pages/components/table/index.js'
import TabsDemo from '../_pages/components/tabs/index.js'
import TagDemo from '../_pages/components/tag/index.js'
import TimePickerDemo from '../_pages/components/time-picker/index.js'
import TimelineDemo from '../_pages/components/timeline/index.js'
import TooltipDemo from '../_pages/components/tooltip/index.js'
// import TransferDemo from '../_pages/components/transfer/index.js'
import TreeDemo from '../_pages/components/tree/index.js'
import TreeSelectDemo from '../_pages/components/tree-select/index.js'
import UploadDemo from '../_pages/components/upload/index.js'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Nunito+Sans', 'Nunito:700']
  }
});

const HeaderComponent = ({ userData, updateLang, signOut, toggleCollapsed }) => (
  <Header id="header">
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={LOGO} />
        </Link>
      </div>

      {userData && (
        <div className="header-right">
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

                <Menu.Item key="1" onClick={updateLang.bind(this, "fr-ca")}>
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
              <Icon type="user" /> {userData.fullName} <Icon type="down" />
            </a>
          </Dropdown>

          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="0">
                  <Link to={"/"}>
                    Calendar View
                  </Link>
                </Menu.Item>

                <Menu.Item key="1" onClick={updateLang.bind(this, "fr-ca")}>
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    Manage my classroom(s)
                  </a>
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item key="3">
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    My Profile
                  </a>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <a className="ant-dropdown-link pages-menu" href="#">
              <Icon type="ellipsis" />
            </a>
          </Dropdown>
        </div>
      )}
    </div>
  </Header>
);

class App extends React.Component {
  state = {
    collapsed: true
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { loading } = this.state
        , { getFieldDecorator } = this.props.form
        , auth = { isAuthenticated: true }

    if (auth.isAuthenticated)
      return (
        <Layout className="fullheight">
          <HeaderComponent
            toggleCollapsed={this.toggleCollapsed}
          />

          <Layout>
            <Sider
              id="app-sidebar"
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.toggleCollapsed}
            >
              <div className="side-menu">
                <Menu
                  defaultSelectedKeys={['1']}
                  // defaultOpenKeys={['sub1']}
                  mode="inline"
                  inlineCollapsed={this.state.collapsed}
                >
                  <Menu.Item key="1">
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
                  </Menu.Item>

                  <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>

                  <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>

                    <SubMenu key="sub3" title="Submenu">
                      <Menu.Item key="11">Option 11</Menu.Item>
                      <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                  </SubMenu>
                </Menu>
              </div>
            </Sider>

            <Content id="app-content">
              <div className="container">
                <Switch>
                  <Route path="/" component={TabsDemo} exact={true} />

                  {/* <Route
                    path="/form/create"
                    component={CreateFormComponent}
                    exact={true}
                  />
                  <Route
                    path="/events/:id"
                    component={EventDetailsComponent}
                    exact={true}
                  />
                  <Route path="*" exact={true} component={NotFoundComponent} /> */}
                </Switch>
              </div>
            </Content>
          </Layout>

          <Footer id="app-footer">Footer</Footer>
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
