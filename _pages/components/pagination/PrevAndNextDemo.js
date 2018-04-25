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
  <Pagination total={500} itemRender={itemRender} />
)
export default expComponent
