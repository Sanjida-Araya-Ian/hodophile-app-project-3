import React from "react";
import "./style.css"

function Carousel(props) {
  return (
    <div id="carouselWrapperFade" className="carousel slide carousel-fade" data-ride="carousel" {...props}>
      {props.children}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100 img1" />
          <div className="carousel-caption">
           <h1>WELCOME</h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img2" />
          <div className="carousel-caption">
            <h1>Iceland</h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img3" />
          <div className="carousel-caption">
            <h1>Phuket Thailand</h1>
          </div> 
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img4" />
          <div className="carousel-caption">
            <h1>Phuket Thailand</h1>
          </div> 
        </div>

      </div>
      <a className="carousel-control-prev" href="#carouselWrapperFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselWrapperFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;