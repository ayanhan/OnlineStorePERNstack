import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";
import CreateBrand from "../components/modals/CreateBrand";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
      <div className="d-flex flex-column">
        <Button
            variant={"outline-dark"}
            className="mt-4 p-2"
            onClick={() => setTypeVisible(true)}
        >
          Add Type
        </Button>
        <Button
            variant={"outline-dark"}
            className="mt-4 p-2"
            onClick={() => setBrandVisible(true)}
        >
          Add Brand
        </Button>
        <Button
            variant={"outline-dark"}
            className="mt-4 p-2"
            onClick={() => setDeviceVisible(true)}
        >
          Add Device
        </Button>
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
        <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      </div>
  );
};

export default Admin;
