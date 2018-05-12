import React from 'react'
import { Rate } from 'antd';

class Rater extends React.Component {
  state = {
    value: 3,
  }
  handleChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
    );
  }
}


const expComponent = () => (
    <div>
        <Rater />
    </div>
)
export default expComponent
