import React from 'react'
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}


const expComponent = () => (
    <div>
  <Calendar onPanelChange={onPanelChange} />
    </div>
)
export default expComponent
