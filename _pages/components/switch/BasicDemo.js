import React from 'react'
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}


const expComponent = () => (
  <Switch defaultChecked onChange={onChange} />
)
export default expComponent
