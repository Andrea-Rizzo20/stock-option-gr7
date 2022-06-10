import { Modal, Button } from "react-bootstrap";
import MyTabs from "./MyTabs";

function MyModal(props) {
const {renderKey, ...rest} = props

  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body  className="formBackground p-0">
        <MyTabs renderKey={props.renderKey} />
      </Modal.Body>
      <Modal.Footer  className="formBackground">
        <Button onClick={props.onHide} className="modalCloseButton heroBGButton" >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
