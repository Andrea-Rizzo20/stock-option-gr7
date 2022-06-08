import { Tab, Tabs } from "react-bootstrap";
import SignUpForm from "./SignUpForm";

const MyTabs = ({ renderKey }) => {
  return (
    <Tabs
      defaultActiveKey={renderKey}
      id="uncontrolled-tab-example"
      className="mb-3 d-flex flex-row"
    >
      <Tab eventKey="login" title="Login">
        <form>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <button type="submit">Login</button>
          <button>Forgot Password</button>
        </form>
      </Tab>
      <Tab eventKey="signup" title="Signup">
        <SignUpForm />
      </Tab>
    </Tabs>
  );
};

export default MyTabs;
