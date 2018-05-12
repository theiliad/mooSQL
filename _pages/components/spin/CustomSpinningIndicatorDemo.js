import React from 'react'
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


const expComponent = () => (
    <div>
        <Spin indicator={antIcon} />
    </div>
)
export default expComponent
