import React from 'react'
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


const expComponent = () => (
    <div>
  <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
)
export default expComponent
