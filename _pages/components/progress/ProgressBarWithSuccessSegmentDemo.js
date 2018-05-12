import React from 'react'
import { Tooltip, Progress } from 'antd';


const expComponent = () => (
    <div>
  <Tooltip title="3 done / 3 in progress / 4 to do">
    <Progress percent={60} successPercent={30} />
  </Tooltip>
    </div>
)
export default expComponent
