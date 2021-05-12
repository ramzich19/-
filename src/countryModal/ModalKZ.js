import{ Modal} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import React from 'react'



function ModalKZ(props) {

    return (
  
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Казахстан
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Компании входящие в ассоциацию</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default ModalKZ;