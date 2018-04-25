import React from 'react'
import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}


const expComponent = () => (
  <div>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </div>
)
export default expComponent
