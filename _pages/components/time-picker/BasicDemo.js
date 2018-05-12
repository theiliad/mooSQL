import React from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}


const expComponent = () => (
    <div>
  <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
    </div>
)
export default expComponent
