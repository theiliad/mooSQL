import React from "react"

import { Menu, Dropdown, Icon } from "antd"
import { Badge } from "antd"
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane
import { List, Avatar } from 'antd'

import AVATARS_MARK from '../../img/demo_assets/faces/mark.jpg'
import AVATARS_SARAH from '../../img/demo_assets/faces/sarah.jpg'
import AVATARS_TOM from '../../img/demo_assets/faces/tom.jpg'

const notificationsData = [
  {
    title: 'Mark is asking for permissions',
    desc: "Mark needs to access user records from Sept. 2016",
    avatar: AVATARS_MARK
  },
  {
    title: 'Sarah wants to meet',
    desc: 'Sarah needs to "go over our design options" with you',
    avatar: AVATARS_SARAH
  },
  {
    title: 'You missed a call from Tom',
    desc: "Tom called you on Tuesday May 6th. at 9:30am",
    avatar: AVATARS_TOM
  }
]

const messageData = [
  {
    title: 'Sarah Vandesky',
    desc: "The soundwaves illustration is looking really great",
    avatar: AVATARS_SARAH
  },
  {
    title: 'Tom White',
    desc: "We should get back to them soon",
    avatar: AVATARS_TOM
  }
]

export default () =>
    <Dropdown
        overlay={
            <Menu className="header-dropdown-tabs">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Notifications (3)" key="1">
                        <List
                            itemLayout="horizontal"
                            dataSource={notificationsData}
                            style={{ padding: '0 20px' }}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href="https://google.com">{item.title}</a>}
                                    description={item.desc}
                                    />
                                </List.Item>
                            )}
                        />
                    </TabPane>

                    <TabPane tab="Messages (2)" key="2">
                        <List
                            itemLayout="horizontal"
                            dataSource={messageData}
                            style={{ padding: '0 20px' }}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href="https://google.com">{item.title} <Icon type="check" style={{ color: 'grey', fontSize: 12, opacity: 0.5 }} /></a>}
                                    description={item.desc}
                                    />
                                </List.Item>
                            )}
                        />
                    </TabPane>
                </Tabs>
            </Menu>
        }
        trigger={["click"]}
        placement="bottomRight"
    >
        <div>
            <Badge count={5}>
            <Icon type="bell" />
            </Badge>
        </div>
    </Dropdown>