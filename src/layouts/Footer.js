const Footer = () => {
  return (
    <div className="footer">
      
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="nofollow" href="https://www.behance.net/tahirsharief">
                  <i aria-hidden="true" className="fab fa-behance" />
                </a>
                <a target="_blank" rel="nofollow" href="http://dribble.com/tahir_ux">
                  <i aria-hidden="true" className="fab fa-dribbble" />
                </a>
                <a target="_blank" rel="nofollow" href="https://www.instagram.com/tahir_ux?igsh=MWtybmdia2IzM2U5dg==">
                  <i aria-hidden="true" className="fab fa-instagram" />
                </a>

                <a target="_blank" rel="nofollow" href="https://wa.me/message/XP5DDC7TD3EOI1">
                  <i aria-hidden="true" className="fab fa-whatsapp" />
                </a>
                {/* <a target="_blank" rel="nofollow" href="http://behance.com">
                  <i aria-hidden="true" className="fab fa-behance" />
                </a> */}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2024 <strong>Altahir.Ibrahim</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>Altahir</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
