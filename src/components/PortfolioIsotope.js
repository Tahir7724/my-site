import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
             
          </a>
          
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/portf/aroma.png"
                        alt="Zorro"
                      />
                      <span className="overlay" />
                    </a>
                  </Link> 
                </div>
              </div>
              <div className="desc">
                <span className="category badge-cust">Apps UI UX Design  <a class=" badge badge-light bg-danger p-1">E-Commerece </a> </span>
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>ROMA OPTICAl Mobile App </a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Roma Optical is a leading company in the field of colored and Clear contact lenses and artificial eyelashes and E-Commerece for different produts.

                  </p>
                </div>
                <Link legacyBehavior target="_blank" href="https://romaopticals.com/en">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/portf/trp.png"
                        alt="Explore"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category badge-cust"> WEB UI UX Design <a class=" badge badge-light bg-danger p-1"> ERP - Financial </a></span>
             

                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>TRP</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Design for help manage all the Arabic language, issue your invoices, manage your sales, 
                  inventory, customers, employees, accounts, and work cycle.
                  </p>
                </div>
                <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.mattressland.ae/home?utm_source=google&utm_source=google&utm_medium=cpc&utm_medium=cpc&utm_campaign=search_brand_dubai&utm_campaign=13087469409&utm_term=brand_dubai&utm_term=matressland&utm_content=123961480684&gad_source=1&gclid=CjwKCAjwooq3BhB3EiwAYqYoEsad_Plz2APPY-LHKnkzLO4n728ftTkAmT_RALjkjuteWC7vT1Ep5hoCdyYQAvD_BwE">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/portf/matress.png"
                        alt="Mozar"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category badge-cust">WEB UI UX Design <a class=" badge badge-light bg-danger p-1">E-Commerece </a> </span>
            
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>Mattressland</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Redesigned Mattressland.ae, enhancing user navigation, simplifying the checkout process, and improving the overall shopping experience for the UAE’s top online mattress store.
                  </p>
                </div>
                <Link legacyBehavior href="https://www.mattressland.ae/home?utm_source=google&utm_source=google&utm_medium=cpc&utm_medium=cpc&utm_campaign=search_brand_dubai&utm_campaign=13087469409&utm_term=brand_dubai&utm_term=matressland&utm_content=123961480684&gad_source=1&gclid=CjwKCAjwooq3BhB3EiwAYqYoEsad_Plz2APPY-LHKnkzLO4n728ftTkAmT_RALjkjuteWC7vT1Ep5hoCdyYQAvD_BwE">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/portf/mutkmil.png"
                        alt="Stay Fit"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category badge-cust"> APPS UI UX Design <a class=" badge badge-light bg-danger p-1"> Health Care </a></span>
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>MUTKAMIL</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/portf/dha.png"
                        alt="Gooir"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category  badge-cust"> APPS UI UX Design <a class=" badge badge-light bg-dark p-1"><i className="fa fa-lock"> </i> Confidential </a></span>
            
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>Dubai Health Authority</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Dubai Health Authority (DHA) provides complete oversight of the regulation and governance of the healthcare sector within the emirate of Dubai.
                  </p>
                </div>
                <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://romaopticals.com/en">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/portf/aroma-web.png"
                        alt="Aroma Website"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category badge-cust"> Web UI UX Design <a class=" badge badge-light bg-danger p-1"> E-Commerce </a></span>
 
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>ROMA OPTICAl WEBSITE</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Roma Optical is a leading company in the field of colored and Clear contact lenses and artificial eyelashes and E-Commerece for different produts.
                  </p>
                </div>
                <Link legacyBehavior href="https://romaopticals.com/en">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            {/* <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link> */}
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
