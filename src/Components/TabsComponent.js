import { Tab, Tabs } from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useTranslation } from "react-i18next";

const TabsComponent = ({ renderKey, showModal, login }) => {
  const { t } = useTranslation();
  return (
    <Tabs
      defaultActiveKey={renderKey}
      id="uncontrolled-tab-example"
      className="mb-3 d-flex flex-row justify-content-center gap-2  w-100"
    >
      <Tab eventKey="login" title={t("header.tabsComponent.login")}>
        <LoginForm showModal={showModal} login={login} />
      </Tab>
      <Tab eventKey="signup" title={t("header.tabsComponent.signUp")}>
        <SignUpForm showModal={showModal} />
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;
