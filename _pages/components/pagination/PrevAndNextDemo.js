import React from 'react'
import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  } else if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}


const expComponent = () => (
    <div>
  <Pagination total={500} itemRender={itemRender} />
    </div>
)
export default expComponent
