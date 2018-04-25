import React from 'react'
import { Slider } from 'antd';

function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}


const expComponent = () => (
  <div>
    <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
    <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
  </div>
)
export default expComponent
