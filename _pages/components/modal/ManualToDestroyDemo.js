import React from 'react'
import { Modal, Button } from 'antd';

function success() {
  const modal = Modal.success({
    title: 'This is a notification message',
    content: 'This modal will be destroyed after 1 second',
  });
  setTimeout(() => modal.destroy(), 1000);
}



const expComponent = () => (
  <Button onClick={success}>Success</Button>
)
export default expComponent
