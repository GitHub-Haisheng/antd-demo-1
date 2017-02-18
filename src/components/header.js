import React from "react";
import { Row, Col } from 'antd';

export default class Header extends React.Component{
  render(){
    return (
      <div>
        <Row>
          <Col span={8}>col-8</Col>
          <Col style={{backgroundColor: '#00a0e9'}} span={8} offset={8}>col-8</Col>
        </Row>
      </div>
    )
  }
}
