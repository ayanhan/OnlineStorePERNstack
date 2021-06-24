import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices().then(data => device.setDevices(data.rows))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const deleteInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }


  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))

    createDevice(formData).then(data => onHide())
  }

  return (
      <Modal
          show={show}
          onHide={onHide}
          centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-3 mb-2">
              <Dropdown.Toggle>{device.selectedType.name || 'Choose type'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(type =>
                  <Dropdown.Item
                      onClick={() => device.setSelectedType(type)}
                      key={type.id}
                  >
                    {type.name}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3 mb-2">
              <Dropdown.Toggle>{device.selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(brand =>
                    <Dropdown.Item
                        onClick={() => device.setSelectedBrand(brand)}
                        key={brand.id}
                    >
                      {brand.name}
                    </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                className="mt-3"
                placeholder="Type device name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Form.Control
                className="mt-3"
                placeholder="Type device price"
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                type="number"
            />
            <Form.Control
              className="mt-3"
              type="file"
              onChange={selectFile}
          />
            <hr/>

            <Button
              variant={"outline-dark"}
              onClick={addInfo}
            >
              Add new properties
            </Button>
            {info.map(i =>
              <Row className="mt-4" key={i.number}>
                <Col md={4}>
                  <Form.Control
                      value={i.title}
                      onChange={(e) => changeInfo('title', e.target.value, i.number)}
                      placeholder="Add name of properties"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                      value={i.description}
                      onChange={(e) => changeInfo('description', e.target.value, i.number)}
                      placeholder="Add description of properties"
                  />
                </Col>
                <Col md={4}>
                  <Button
                      onClick={() => deleteInfo(i.number)}
                      variant={"outline-danger"}
                  >Delete
                  </Button>
                </Col>
              </Row>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Close</Button>
          <Button variant="outline-success" onClick={addDevice}>Add</Button>
        </Modal.Footer>
      </Modal>
  );
});

export default CreateDevice;
