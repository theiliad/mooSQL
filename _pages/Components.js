import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    IndexRoute,
    Redirect
} from "react-router-dom"

import AffixDemo from './components/affix/index.js'
import AlertDemo from './components/alert/index.js'
import AnchorDemo from './components/anchor/index.js'
import AutoCompleteDemo from './components/auto-complete/index.js'
import AvatarDemo from './components/avatar/index.js'
import BackTopDemo from './components/back-top/index.js'
import BadgeDemo from './components/badge/index.js'
// import BreadcrumbDemo from './components/breadcrumb/index.js'
import ButtonDemo from './components/button/index.js'
import CalendarDemo from './components/calendar/index.js'
import CardDemo from './components/card/index.js'
import CarouselDemo from './components/carousel/index.js'
// import CascaderDemo from './components/cascader/index.js'
import CheckboxDemo from './components/checkbox/index.js'
import CollapseDemo from './components/collapse/index.js'
// import DatePickerDemo from './components/date-picker/index.js'
import DividerDemo from './components/divider/index.js'
import DropdownDemo from './components/dropdown/index.js'
import FormDemo from './components/form/index.js'
import GridDemo from './components/grid/index.js'
import InputDemo from './components/input/index.js'
import InputNumberDemo from './components/input-number/index.js'
// import LayoutDemo from './components/layout/index.js'
import ListDemo from './components/list/index.js'
import LocaleProviderDemo from './components/locale-provider/index.js'
import MentionDemo from './components/mention/index.js'
import MenuDemo from './components/menu/index.js'
import MessageDemo from './components/message/index.js'
// import ModalDemo from './components/modal/index.js'
// import NotificationDemo from './components/notification/index.js'
import PaginationDemo from './components/pagination/index.js'
import PopconfirmDemo from './components/popconfirm/index.js'
import PopoverDemo from './components/popover/index.js'
import ProgressDemo from './components/progress/index.js'
import RadioDemo from './components/radio/index.js'
import RateDemo from './components/rate/index.js'
import SelectDemo from './components/select/index.js'
import SliderDemo from './components/slider/index.js'
import SpinDemo from './components/spin/index.js'
import StepsDemo from './components/steps/index.js'
import SwitchDemo from './components/switch/index.js'
import TableDemo from './components/table/index.js'
import TabsDemo from './components/tabs/index.js'
import TagDemo from './components/tag/index.js'
import TimePickerDemo from './components/time-picker/index.js'
import TimelineDemo from './components/timeline/index.js'
import TooltipDemo from './components/tooltip/index.js'
// import TransferDemo from './components/transfer/index.js'
import TreeDemo from './components/tree/index.js'
import TreeSelectDemo from './components/tree-select/index.js'
import UploadDemo from './components/upload/index.js'

const ComponentsPage = ({ match }) => (
  <div className="components-demo">
    <h3 className="title">Components</h3>
    
    <Route path={match.url + '/affix'} component={AffixDemo} exact={true} />
    <Route path={match.url + '/alert'} component={AlertDemo} exact={true} />
    <Route path={match.url + '/anchor'} component={AnchorDemo} exact={true} />
    <Route path={match.url + '/auto-complete'} component={AutoCompleteDemo} exact={true} />
    <Route path={match.url + '/avatar'} component={AvatarDemo} exact={true} />
    <Route path={match.url + '/back-top'} component={BackTopDemo} exact={true} />
    <Route path={match.url + '/badge'} component={BadgeDemo} exact={true} />
    {/* <Route path={match.url + '/breadcrumb'} component={BreadcrumbDemo} exact={true} /> */}
    <Route path={match.url + '/button'} component={ButtonDemo} exact={true} />
    <Route path={match.url + '/calendar'} component={CalendarDemo} exact={true} />
    <Route path={match.url + '/card'} component={CardDemo} exact={true} />
    <Route path={match.url + '/carousel'} component={CarouselDemo} exact={true} />
    {/* <Route path={match.url + '/cascader'} component={CascaderDemo} exact={true} /> */}
    <Route path={match.url + '/checkbox'} component={CheckboxDemo} exact={true} />
    <Route path={match.url + '/collapse'} component={CollapseDemo} exact={true} />
    {/* <Route path={match.url + '/date-picker'} component={DatePickerDemo} exact={true} /> */}
    <Route path={match.url + '/divider'} component={DividerDemo} exact={true} />
    <Route path={match.url + '/dropdown'} component={DropdownDemo} exact={true} />
    <Route path={match.url + '/form'} component={FormDemo} exact={true} />
    <Route path={match.url + '/grid'} component={GridDemo} exact={true} />
    <Route path={match.url + '/input'} component={InputDemo} exact={true} />
    <Route path={match.url + '/input-number'} component={InputNumberDemo} exact={true} />
    {/* <Route path={match.url + '/layout'} component={LayoutDemo} exact={true} /> */}
    <Route path={match.url + '/list'} component={ListDemo} exact={true} />
    <Route path={match.url + '/locale-provider'} component={LocaleProviderDemo} exact={true} />
    <Route path={match.url + '/mention'} component={MentionDemo} exact={true} />
    <Route path={match.url + '/menu'} component={MenuDemo} exact={true} />
    <Route path={match.url + '/message'} component={MessageDemo} exact={true} />
    {/* <Route path={match.url + '/modal'} component={ModalDemo} exact={true} /> */}
    {/* <Route path={match.url + '/notification'} component={NotificationDemo} exact={true} /> */}
    <Route path={match.url + '/pagination'} component={PaginationDemo} exact={true} />
    <Route path={match.url + '/popconfirm'} component={PopconfirmDemo} exact={true} />
    <Route path={match.url + '/popover'} component={PopoverDemo} exact={true} />
    <Route path={match.url + '/progress'} component={ProgressDemo} exact={true} />
    <Route path={match.url + '/radio'} component={RadioDemo} exact={true} />
    <Route path={match.url + '/rate'} component={RateDemo} exact={true} />
    <Route path={match.url + '/select'} component={SelectDemo} exact={true} />
    <Route path={match.url + '/slider'} component={SliderDemo} exact={true} />
    <Route path={match.url + '/spin'} component={SpinDemo} exact={true} />
    <Route path={match.url + '/steps'} component={StepsDemo} exact={true} />
    <Route path={match.url + '/switch'} component={SwitchDemo} exact={true} />
    <Route path={match.url + '/table'} component={TableDemo} exact={true} />
    <Route path={match.url + '/tabs'} component={TabsDemo} exact={true} />
    <Route path={match.url + '/tag'} component={TagDemo} exact={true} />
    <Route path={match.url + '/time-picker'} component={TimePickerDemo} exact={true} />
    <Route path={match.url + '/timeline'} component={TimelineDemo} exact={true} />
    <Route path={match.url + '/tooltip'} component={TooltipDemo} exact={true} />
    {/* <Route path={match.url + '/transfer'} component={TransferDemo} exact={true} /> */}
    <Route path={match.url + '/tree'} component={TreeDemo} exact={true} />
    <Route path={match.url + '/tree-select'} component={TreeSelectDemo} exact={true} />
    <Route path={match.url + '/upload'} component={UploadDemo} exact={true} />
  </div>
)
export default ComponentsPage
