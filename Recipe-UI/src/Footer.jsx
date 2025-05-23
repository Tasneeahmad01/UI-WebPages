import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      
      {/* Top social section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-center">
          <span>Selection Item Products</span>
        </div>
      </section>

      {/* Main footer content */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">

            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company Name</h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><a href="#" className="text-reset">MDBootstrap</a></p>
              <p><a href="#" className="text-reset">MDWordPress</a></p>
              <p><a href="#" className="text-reset">BrandFlow</a></p>
              <p><a href="#" className="text-reset">Bootstrap Angular</a></p>
            </div>

            {/* Contact */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope me-3"></i> info@gmail.com</p>
              <p><i className="fas fa-phone me-3"></i> +01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> +01 234 567 89</p>
            </div>

            {/* Social Icons */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-center">Follow us</h6>
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex gap-3 mb-3">
                  <a href="#" className="text-reset">
                    <img src="https://cdn3d.iconscout.com/3d/free/preview/free-facebook-3d-icon-download-in-png-blend-fbx-gltf-file-formats--twitter-logo-social-media-pack-logos-icons-7516820.png?f=webp&h=700" alt="Facebook" style={{ width: "30px", borderRadius: "50%" }} />
                  </a>
                  <a href="#" className="text-reset">
                    <img src="https://as2.ftcdn.net/jpg/05/27/82/33/1000_F_527823378_eotAAh4vzkJTqsOVdWBHVdYB2Jrhkx5M.jpg" alt="Twitter" style={{ width: "30px", borderRadius: "50%" }} />
                  </a>
                  <a href="#" className="text-reset">
                    <img src="https://ouch-prod-var-cdn.icons8.com/ob/illustrations/previews/3jyAhKNs4T09lMjF.webp" alt="YouTube" style={{ width: "30px", borderRadius: "50%" }} />
                  </a>
                </div>
                <div className="d-flex gap-3">
                  <a href="#" className="text-reset">
                    <img src="https://img.freepik.com/premium-vector/3d-square-instagram-logo-isolated-transparent-background_1190923-2450.jpg?semt=ais_hybrid&w=740" alt="Instagram" style={{ width: "30px", borderRadius: "50%" }} />
                  </a>
                  <a href="#" className="text-reset">
                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png" alt="LinkedIn" style={{ width: "30px", borderRadius: "50%" }} />
                  </a>
                  <a href="#" className="text-reset">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAjUn5FGPngcZh9k4Vo5YUOubjGO9vf-LQQ&s" alt="Snapchat" style={{ width: "30px", borderRadius: "50%" }} />
                  </a>
                </div>
              </div>
              <img src="https://img.freepik.com/premium-psd/cookies-3d-editable-photoshop-text-effect-style-with-background_444211-2062.jpg" alt="" style={{width:"250px",height:"150px",borderRadius:"90px",marginTop:"40px"}}/>
            </div>
            
          </div>
        </div>
      </section>

      {/* Bottom copyright */}
      <div className="text-center p-4 bg-light">
        © 2025 Tasneem Ahmed Developer: <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
