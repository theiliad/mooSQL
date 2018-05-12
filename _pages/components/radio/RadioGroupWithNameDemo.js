import React from 'react'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

function App() {
  return (
    <RadioGroup name="radiogroup" defaultValue={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup>
  );
}


const expComponent = () => (
    <div>
        <App />
    </div>
)
export default expComponent
