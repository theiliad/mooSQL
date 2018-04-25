import React from 'react'
import { Popconfirm } from 'antd';


const expComponent = () => (
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
)
export default expComponent
