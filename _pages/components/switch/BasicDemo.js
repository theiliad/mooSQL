import React from 'react'
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}


const expComponent = () => (
    <div>
  <Switch defaultChecked onChange={onChange} />
    </div>
)
export default expComponent
