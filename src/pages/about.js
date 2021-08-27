import React from 'react'
import { Link } from 'gatsby'
//import { styles } from '../components/index.module.css'
require("../components/index.css")
require("../assets/vendor/bootstrap/css/bootstrap.min.css")
require("../assets/vendor/icofont/icofont.min.css")
require("../assets/vendor/boxicons/css/boxicons.min.css")
require("../assets/vendor/owl.carousel/assets/owl.carousel.min.css")
require("../assets/vendor/venobox/venobox.css")
require("../assets/vendor/aos/aos.css")
require("../assets/css/style.css")

export default function about(){
    
    return(
        <main>
            {/* <title>About Page</title>
            <h1>Welcome to my Gatsby site!</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/content">Content</Link></li>
            </ul>
            <hr></hr> */}
            <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                <div className="container d-flex">
                <div className="contact-info mr-auto">
                    <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                    <i className="icofont-phone"></i> +1 5589 55488 55
                </div>
                <div className="social-links">
                    <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                    <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                    <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                    <a href="#" className="skype"><i className="icofont-skype"></i></a>
                    <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                </div>
                </div>
            </div>

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                <h1 className="logo mr-auto"><a href="index.html">DEMO<span>.</span></a></h1>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#team">Team</a></li>
                    <li className="drop-down"><a href="">Drop Down</a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="drop-down"><a href="#">Deep Drop Down</a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
                </div>

            </header>
            <section id="hero" className="d-flex align-items-center">
                <div className="container" >
                <h1>Welcome to <span>demo </span>
                </h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <div className="d-flex">
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i className="icofont-play-alt-2"></i></a>
                </div>
                </div>
            </section>
            <section id="featured-services" className="featured-services">
                <div className="container" >

                    <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box"  data-aos-delay="100">
                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                        <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box"  data-aos-delay="200">
                        <div className="icon"><i className="bx bx-file"></i></div>
                        <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box"  data-aos-delay="300">
                        <div className="icon"><i className="bx bx-tachometer"></i></div>
                        <h4 className="title"><a href="">Magni Dolores</a></h4>
                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box"  data-aos-delay="400">
                        <div className="icon"><i className="bx bx-world"></i></div>
                        <h4 className="title"><a href="">Nemo Enim</a></h4>
                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    </div>

                </div>
            </section>

            <section id="about" className="about section-bg">
                <div className="container" >

                    <div className="section-title">
                    <h2>About</h2>
                    <h3>Find Out More <span>About Us</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>

                    <div className="row">
                    <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"  data-aos-delay="100">
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className="font-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                        <ul>
                        <li>
                            <i className="bx bx-store-alt"></i>
                            <div>
                            <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                            </div>
                        </li>
                        <li>
                            <i className="bx bx-images"></i>
                            <div>
                            <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                            <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                            </div>
                        </li>
                        </ul>
                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    </div>

                </div>
                </section>

                <section id="skills" className="skills">
      <div className="container" >

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Photoshop <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    <section id="counts" className="counts">
      <div className="container" >

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="icofont-simple-smile"></i>
              <span data-toggle="counter-up">232</span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="icofont-document-folder"></i>
              <span data-toggle="counter-up">521</span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-live-support"></i>
              <span data-toggle="counter-up">1,463</span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-users-alt-5"></i>
              <span data-toggle="counter-up">15</span>
              <p>Hard Workers</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="services" className="services">
      <div className="container" >

        <div className="section-title">
          <h2>Services</h2>
          <h3>Check our <span>Services</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4><a href="">Dele cardo</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-arch"></i></div>
              <h4><a href="">Divera don</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">

        <div className="owl-carousel testimonials-carousel">

          <div className="testimonial-item">
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

        </div>

      </div>
    </section>
    <section id="pricing" className="pricing">
      <div className="container" >

        <div className="section-title">
          <h2>Pricing</h2>
          <h3>Check our <span>Pricing</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6"  data-aos-delay="100">
            <div className="box">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0"  data-aos-delay="200">
            <div className="box featured">
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0"  data-aos-delay="300">
            <div className="box">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0"  data-aos-delay="400">
            <div className="box">
              <span className="advanced">Advanced</span>
              <h3>Ultimate</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        </main>
    )
}