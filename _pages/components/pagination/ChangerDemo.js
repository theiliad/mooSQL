import React from 'react'
import { Pagination } from 'antd';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}


const expComponent = () => (
    <div>
  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
    </div>
)
export default expComponent
