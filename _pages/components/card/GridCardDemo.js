import React from 'react'
import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


const expComponent = () => (
    <div>
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
    </div>
)
export default expComponent
