import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import vector from '../assets/Vector.png'
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
  const history = useHistory()
  return (
      <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
        <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
          <Image width={150} height={150} src={""} />
          <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
            <div>samsung...</div>
            <div className="d-flex align-items-center">
              <div>{device.rating}</div>
              <Image width={15} height={15} src={vector} />
            </div>
          </div>
          <div>{device.name}</div>
        </Card>
      </Col>
  );
};

export default DeviceItem;
