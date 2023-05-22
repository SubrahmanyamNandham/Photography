import { HiMail } from "react-icons/hi";

import {FaInstagram,FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <footer class="footer-distributed">

<div class="footer-left">

  <h3>T.Sai Satish(Bunny)</h3>

 
  <p class="footer-company-name">Photographer/VideoGrapher</p>
</div>

<div class="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>Vidyuth Nagar , Kakinada</span> Andhra Pradesh , India</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+91-8328637379</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">beclix66@gmail.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>Services</span>
  I provide services like  Photography and VideoGraphy and prewedding and post wedding and meternity photoshoot and add Advertisements and drone VideoGraphy
  </p>

 
  <div className='foot'>
  
              <div className="icon-con">
                <a
                  href="https://instagram.com/your_s_bunny?igshid=MzRlODBiNWFlZA=="
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="gmail.com"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <HiMail  className="social-icon" />
                </a>
              </div>

         

              <div className="icon-con">
                <a
                  href="https://www.youtube.com/watch?v=YB-X9BqHVj4&feature=youtu.be"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="social-icon" />
                </a>
              
            </div>
   
    </div>

</div>

</footer>
  
)
export default Footer