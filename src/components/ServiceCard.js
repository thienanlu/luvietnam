import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


import ButtonComponent from "./Button";

import '../assets/css/service.css'

function ServiceCard(props){
    const [modalShow, setModalShow] = useState(false);


    return(
        <div className="service-card col-lg-6 col-sm-12" id={props.id}>
            <div className="service-card-wrapper">
                <img src={props.image} alt="Sample restaurant setted up by Luvietnam" />
                <div className="service-card-textbox">
                    <h3 className="service-card-name">{props.name}</h3>
                    <div className="service-card-nav">
                        <ButtonComponent link="/mo-hinh-quan-com-ga-da-gion" text="Chi tiết" />

                        {/* open button modal for project images */}
                        <Button variant="primary" onClick={() => setModalShow(true)} className='button service-modal-btn'>
                            Xem hình ảnh
                        </Button>

                    </div>
                        <ServiceModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            name={props.name}
                            image1={props.image1}
                            image2={props.image2}
                            image3={props.image3}
                            image4={props.image4}
                            image5={props.image5}
                        />
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
      className='service-modal-main'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* image slider here */}
        <div className="service-modal-carousel container">
          <div className='row'>
            <div id="carouselExampleIndicators" className="carousel service-carousel slide">
              <div className="carousel-indicators service-carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={props.image1} className="" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={props.image2} className="" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={props.image3} className="" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={props.image4} className="" alt="..."/>
                  </div><div className="carousel-item">
                    <img src={props.image5} className="" alt="..."/>
                  </div>
              </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='button'>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}
