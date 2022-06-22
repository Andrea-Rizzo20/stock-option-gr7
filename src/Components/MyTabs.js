import { Tab, Tabs } from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const MyTabs = ({ renderKey, showModal }) => {
  console.log(showModal)
  return (
    <Tabs
      defaultActiveKey={renderKey}
      id="uncontrolled-tab-example"
      className="mb-3 d-flex flex-row justify-content-center gap-2  w-100"
    >
      <Tab eventKey="login" title="Login">
        <LoginForm showModal={showModal}/>
      </Tab>
      <Tab eventKey="signup" title="Signup">
        <SignUpForm showModal={showModal} />
      </Tab>
    </Tabs>
  );
};

export default MyTabs;
