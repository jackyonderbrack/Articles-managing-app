import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal'


interface EditArticleProps {

}

function EditArticle() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <>
        <Button 
            variant="secondary" 
            onClick={handleShow}>
            Edit
        </Button>

        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header 
                closeButton>
                <Modal.Title>Tytuł</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Body
            </Modal.Body>

            <Modal.Footer>
            <Button 
                variant='secondary' 
                onClick={handleClose}>Zamknij</Button>

            <Button 
                variant='primary'>Zapisz</Button>
            </Modal.Footer>

        </Modal>

        
    </>
  )
}

export default EditArticle;