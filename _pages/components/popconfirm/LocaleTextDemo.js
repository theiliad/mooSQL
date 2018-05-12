import React from 'react'
import { Popconfirm } from 'antd';


const expComponent = () => (
    <div>
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
    </div>
)
export default expComponent
