import React from 'react'
import { Input } from 'antd';
const Search = Input.Search;


const expComponent = () => (
    <div>
  <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br /><br />
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton
    />
    <br /><br />
    <Search placeholder="input search text" enterButton="Search" size="large" />
  </div>
    </div>
)
export default expComponent
