import React from 'react'
import { Rate } from 'antd';


const expComponent = () => (
    <div>
  <div>
    <Rate defaultValue={3} /> allowClear: true
    <br />
    <Rate allowClear={false} defaultValue={3} /> allowClear: false
  </div>
    </div>
)
export default expComponent
