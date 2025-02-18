import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


import ButtonComponent from "./Button";

import '../assets/css/servicecard.css'

function ServiceCard(props){
    const [modalShow, setModalShow] = useState(false);


    return(
        <div className="service-card col-lg-6 col-sm-12">
            <div className="service-card-wrapper">
                <img src={props.image} alt="Sample restaurant setted up by Luvietnam" />
                <div className="service-card-textbox">
                    <h3 className="service-card-name">{props.name}</h3>
                    <div className="service-card-nav">
                        <ButtonComponent link="/contact" text="Liên hệ nhận tư vấn" />

                        {/* open button modal for project images */}
                        <Button variant="primary" onClick={() => setModalShow(true)} className='button service-modal-btn'>
                            Xem hình ảnh
                        </Button>

                        <ServiceModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            name={props.name}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;


function ServiceModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* image slider here */}
        <div className="service-modal-carousel">
            
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
