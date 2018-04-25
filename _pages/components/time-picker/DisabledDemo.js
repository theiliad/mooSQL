import React from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';


const expComponent = () => (
  <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
)
export default expComponent
