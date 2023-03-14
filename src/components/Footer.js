import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Instagram from '@mui/icons-material/Instagram';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="flex justify-center align-middle">
            <div className="footer-col">
              <h4 className="text-center">Follow Us</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/dsc-tcet/" className="facebook">
                  <LinkedInIcon />
                </a>
                <a href="https://twitter.com/DscTcet" className="facebook">
                  <TwitterIcon />
                </a>
                <a href="https://www.instagram.com/gdsc_tcet/" className="github">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="relative -bottom-10 text-white text-center">
            <div className="col-md-7">
              <p className="copyright tracking-wider">
                © {year} Copyright <span className="font-bold ">Design Day</span> by DSC-TCET. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
