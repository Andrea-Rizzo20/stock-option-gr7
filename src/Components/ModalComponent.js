import { Modal, Button } from "react-bootstrap";
import TabsComponent from "./TabsComponent";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ModalComponent(props) {
  const { renderKey, login, ...rest } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();
  // useEffect(()=>{
  //   console.log('monta')
  //   return ()=> console.log('smonta')
  // },[])
  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="formBackground p-0">
        <TabsComponent
          renderKey={props.renderKey}
          login={login}
        />
      </Modal.Body>
      <Modal.Footer className="formBackground">
        <Button onClick={() =>navigate('/')} className="modalCloseButton heroBGButton">
          {t("header.modalComponent")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
