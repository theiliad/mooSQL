import React from 'react'
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};


const expComponent = () => (
    <div>
  <Button type="primary" onClick={openNotification}>Open the notification box</Button>
    </div>
)
export default expComponent
