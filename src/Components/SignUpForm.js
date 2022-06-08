const SignUpForm = () => {
  return (
    <form>
      <input type="email" placeholder="Email"></input>
      <input type="text" placeholder="First Name"></input>
      <input type="text" placeholder="Last Name"></input>
      <input type="tel" placeholder="Telephone"></input>
      <input type="password" placeholder="Password"></input>
      <input type="password" placeholder="Confirm Password"></input>
      <input type="checkbox"></input>
      <label>I agree to Terms of Service</label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
