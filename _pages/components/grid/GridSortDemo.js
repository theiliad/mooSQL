import React from 'react'
import { Row, Col } from 'antd';


const expComponent = () => (
    <div>
  <div>
    <Row>
      <Col span={18} push={6}>col-18 col-push-6</Col>
      <Col span={6} pull={18}>col-6 col-pull-18</Col>
    </Row>
  </div>
    </div>
)
export default expComponent
