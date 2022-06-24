import { Modal, Button } from "react-bootstrap";
import MyTabs from "./MyTabs";

function MyModal(props) {
const {renderKey, onHide, ...rest} = props
console.log(onHide)
  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body  className="formBackground p-0">
        <MyTabs renderKey={props.renderKey} showModal={onHide} />
      </Modal.Body>
      <Modal.Footer  className="formBackground">
        <Button onClick={onHide} className="modalCloseButton heroBGButton" >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
