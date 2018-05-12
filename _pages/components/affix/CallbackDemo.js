import React from 'react'
import { Affix, Button } from 'antd';


const expComponent = () => (
    <div>
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
    </div>
)
export default expComponent
