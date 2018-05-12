import React from 'react'
import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}


const expComponent = () => (
    <div>
  <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    </div>
)
export default expComponent
