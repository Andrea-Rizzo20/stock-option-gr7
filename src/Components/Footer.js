import logo from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <footer className="footer-cards-gradient py-5">
      <div className="w-75 mx-auto">
        <div className="row mb-4">
          <img
            src={logo}
            className="col-7 mx-auto col-md-2 mx-md-0 text-md-start text-center"
            alt="Optionsfy Logo"
          />
        </div>
        <div className="row flex-column-reverse flex-md-row">
          <p className="col-10 mx-auto text-center text-md-start col-md-6 text-white ">
            Disclaimer: Please be aware that trading stocks, futures, stock
            options, and futures options involves a substantial risk of loss and
            is not suitable for all investors. Past performance is not
            necessarily indicative of future results. INFORMATION IS FOR GENERAL
            EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE CONSTRUED AS
            INDIVIDUAL INVESTMENT ADVICE. More info here
          </p>
          <ul className="col-10 mx-auto text-center text-md-end col-md-6 text-white list-unstyled">
            <li>
              <a className="text-white text-decoration-none">
                TERMS OF SERVICE
              </a>
            </li>
            <li>
              <a className="text-white text-decoration-none">PRIVACY POLICY</a>
            </li>
            <li>
              <a className="text-white text-decoration-none">DISCLAIMER</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
