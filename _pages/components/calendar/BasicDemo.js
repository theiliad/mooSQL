import React from 'react'
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}


const expComponent = () => (
  <Calendar onPanelChange={onPanelChange} />
)
export default expComponent
