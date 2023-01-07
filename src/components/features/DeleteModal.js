import { Button, Modal } from "react-bootstrap";

function DeleteModal(props) {

    return (
     <>
        <Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Remove Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to remove this post?
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={props.handleClose}>Close</Button>
               <Button variant="outline-danger" onClick={props.handleRemove}>Remove</Button>
            </Modal.Footer>
        </Modal>
     </>
    );
}

export default DeleteModal