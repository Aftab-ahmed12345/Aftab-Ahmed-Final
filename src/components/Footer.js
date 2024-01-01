import React from 'react';
import Image1 from '../assets/images/1.png';
import Image2 from '../assets/images/2.png';
import Image3 from '../assets/images/3.png';
import Image4 from '../assets/images/4.png';

function Footer() {
  return (
    <div className={" p-4 text-dark fixed bottom "}  >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
                   
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            
          </div>
        </div>
      </div>
      
      <hr></hr>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p>© 2020 FasTech Systems Private Limited Sukkur, </p>
             <p> Privacy Policy Terms & Conditions</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 " style={{paddingLeft:"20rem"}}>
            <img src={Image1} alt="Image1" />
            <img src={Image2} alt="Image2" />
            <img src={Image3} alt="Image3" />
            <img src={Image4} alt="Image4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
