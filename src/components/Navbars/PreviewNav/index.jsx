import Link from 'next/link';
import appData from '@data/appData.json';

const PreviewNavbar = ({ navbarRef }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light style-1 nav-preview py-0" ref={navbarRef}>
      <div className="container-xxl">
        <Link className="navbar-brand" to="#">
          <img src="/assets/img/logo_cd.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropDown megaMenu col3">
              <Link className="nav-links dropLink active" to="#">
                Homes
                <small className="icon ms-1"><i className="bi bi-chevron-down me-1"></i></small>
              </Link>
              <ul className="dropDownMenu">
                <li className="dropdown-items">
                  <Link to="#" className="menuLink">multi-pages
                    <ul className="subDropDown">
                      <li>
                        <Link className="subLink" to="/home-it-solutions2">
                          IT Solution Creative
                        </Link>
                        <span className="new">new</span>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-data-analysis">
                          Data Analysis
                        </Link>
                        <span className="new">new</span>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-app-landing">
                          App Landing
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-digital-agency">
                          Digital Agency
                        </Link>
                        <span className="new">Hot</span>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-marketing-startup">
                          Marketing Startup
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-saas-technology">
                          Software company
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-saas-technology">
                          Saas Technology
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-it-solutions">
                          IT Solution
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/page-shop-5">
                          shop
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="dropdown-items">
                  <Link to="#" className="menuLink">one-page
                    <ul className="subDropDown">
                      <li>
                        <Link className="subLink" to="/home-app-landing-onePage">
                          App Landing
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-digital-agency-onePage">
                          Digital Agency
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-marketing-startup-onePage">
                          Marketing Startup
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-saas-technology-onePage">
                          Software company
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-saas-technology-onePage">
                          Saas Technology
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/home-it-solutions-onePage">
                          IT Solution
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/page-shop-app">
                          shop
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="dropdown-items">
                  <Link to="#" className="menuLink">RTL
                    <ul className="subDropDown">
                      <li>
                        <Link className="subLink" to="/rtl-home-marketing-startup">
                          Marketing Startup
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/rtl-home-marketing-startup-onePage">
                          Marketing Startup one page
                        </Link>
                      </li>
                      <li>
                        <Link className="subLink" to="/rtl-page-shop">
                          shop
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropDown megaMenu col3">
              <Link className="nav-links dropLink active" to="#">
                pages
                <small className="icon ms-1"><i className="bi bi-chevron-down me-1"></i></small>

                <ul className="dropDownMenu">
                  <li className="dropdown-items">
                    <Link to="#" className="menuLink">app pages
                      <ul className="subDropDown">
                        <li>
                          <Link className="subLink" to="/page-about-app">
                            about
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-services-app">
                            services
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-contact-app">
                            contact
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-product-app">
                            product
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li className="dropdown-items">
                    <Link to="#" className="menuLink">Saas
                      <ul className="subDropDown">
                        <li>
                          <Link className="subLink" to="/page-about-5">
                            about
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-services-5">
                            services
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-contact-5">
                            contact
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-product-5">
                            product
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li className="dropdown-items">
                    <Link to="#" className="menuLink">RTL
                      <ul className="subDropDown">
                        <li>
                          <Link className="subLink" to="/rtl-page-about">
                            about
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/rtl-page-services">
                            services
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/rtl-page-contact">
                            contact
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/rtl-page-product">
                            product
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li className="nav-item dropDown megaMenu col3">
              <Link className="nav-links dropLink active" to="#">
                News
                <small className="icon ms-1"><i className="bi bi-chevron-down me-1"></i></small>

                <ul className="dropDownMenu">
                  <li className="dropdown-items">
                    <Link to="#" className="menuLink">blog
                      <ul className="subDropDown">
                        <li>
                          <Link className="subLink" to="/page-blog-5">
                            saas right side bar blog
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-blog-5-left-sidebar">
                            saas left side bar blog
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-blog-5-wide">
                            saas wide blog
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-blog-app">
                            app right side bar blog
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-blog-app-left-sidebar">
                            app left side bar blog
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-blog-app-wide">
                            app wide blog
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/rtl-page-blog">
                            RTL blog
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li className="dropdown-items">
                    <Link to="#" className="menuLink">post
                      <ul className="subDropDown">
                        <li>
                          <Link className="subLink" to="/page-single-post-5">
                            Saas right side bar single post
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-single-post-5-left-sidebar">
                            Saas left side bar single post
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-single-post-5-wide">
                            Saas wide single post
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-single-post-app">
                            app right side bar single post
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-single-post-app-left-sidebar">
                            app left side bar single post
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-single-post-app-wide">
                            app wide single post
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/rtl-page-single-post">
                            RTL single post
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                  <li className="dropdown-items">
                    <Link to="#" className="menuLink">portfolio
                      <ul className="subDropDown">
                        <li>
                          <Link className="subLink" to="/page-portfolio-5">
                            Saas grid portfolio
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-single-project-5">
                            Saas single project
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-portfolio-app">
                            app grid portfolio
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/page-single-project-app">
                            app single project
                          </Link>
                        </li>
                        <li>
                          <Link className="subLink" to="/rtl-page-portfolio">
                            RTL portfolio
                          </Link>
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links dropLink" to={appData.itemDocsLink}>
                documentations
              </Link>
            </li>
          </ul>
          <div className="nav-side flex-shrink-0">
            <div className="qoute-nav">
              <Link to="#0" className="btn sm-butn butn-gard border-0 text-white">
                <span>get started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default PreviewNavbar