import React from 'react'
import { Badge } from 'antd';


const expComponent = () => (
    <div>
  <div>
    <Badge count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={0} showZero>
      <a href="#" className="head-example" />
    </Badge>
  </div>
    </div>
)
export default expComponent
