import React from 'react'
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


const expComponent = () => (
<Spin indicator={antIcon} />
)
export default expComponent
