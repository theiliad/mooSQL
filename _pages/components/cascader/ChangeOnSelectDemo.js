import React from 'react'
import { Cascader } from 'antd';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hanzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}


const expComponent = () => (
    <div>
  <Cascader options={options} onChange={onChange} changeOnSelect />
    </div>
)
export default expComponent
