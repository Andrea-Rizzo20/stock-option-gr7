import { Modal, Button } from "react-bootstrap";
import TabsComponent from "./TabsComponent";
import { useTranslation } from "react-i18next";

function ModalComponent(props) {
	const { renderKey, onHide, login, ...rest } = props;
	const { t } = useTranslation();
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
					showModal={onHide}
					login={login}
				/>
			</Modal.Body>
			<Modal.Footer className="formBackground">
				<Button onClick={onHide} className="modalCloseButton heroBGButton">
					{t("header.modalComponent")}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ModalComponent;
