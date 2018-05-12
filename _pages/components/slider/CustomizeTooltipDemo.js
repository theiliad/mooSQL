import React from 'react'
import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}


const expComponent = () => (
    <div>
  <div>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </div>
    </div>
)
export default expComponent
