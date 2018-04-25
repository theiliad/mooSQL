import React from 'react'
import { Pagination, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);


const expComponent = () => (
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>
)
export default expComponent
