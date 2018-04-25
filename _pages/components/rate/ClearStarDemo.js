import React from 'react'
import { Rate } from 'antd';


const expComponent = () => (
  <div>
    <Rate defaultValue={3} /> allowClear: true
    <br />
    <Rate allowClear={false} defaultValue={3} /> allowClear: false
  </div>
)
export default expComponent
