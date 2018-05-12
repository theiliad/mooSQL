import React from 'react'
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}


const expComponent = () => (
    <div>
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    </div>
)
export default expComponent
