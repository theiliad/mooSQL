import React from 'react'
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


const expComponent = () => (
  <Checkbox onChange={onChange}>Checkbox</Checkbox>
)
export default expComponent
