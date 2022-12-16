import { Slide, Slider, SliderArrows, SliderPaginator, SliderPause } from "@3ffect/gstring";
import React, { ReactElement } from "react";
import "./slider-example.scss";
export const SliderExample: React.FC = (): ReactElement => {
  return (
    <>
      <section style={{ height: "100vh", position: "relative" }}>
        <>
          <section style={{ height: "100vh", position: "relative" }}>
            <>
              <Slider autoSlide={5000}>
                <SliderArrows className="color-primary" />
                <SliderPause className="color-primary" />
                <SliderPaginator />
                <Slide>
                  <div className="slider-image">
                    <img className="mobile-hidden" src="https://via.placeholder.com/1920x1080?text=Slide%201" />
                    <img className="hidden mobile-displayed" src="https://via.placeholder.com/1080x1080?text=Slide%201" />
                  </div>
                  <div className="slider-caption">
                    <div className="box-container">
                      <div className="inner">
                        <h3>Caption 1</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide>
                  <div className="slider-image">
                    <img className="mobile-hidden" src="https://via.placeholder.com/1920x1080?text=Slide%202" />
                    <img className="hidden mobile-displayed" src="https://via.placeholder.com/1080x1080?text=Slide%202" />
                  </div>
                  <div className="slider-caption">
                    <div className="box-container">
                      <div className="inner">
                        <h3>Caption 2</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide>
                  <div className="slider-image">
                    <img className="mobile-hidden" src="https://via.placeholder.com/1920x1080?text=Slide%203" />
                    <img className="hidden mobile-displayed" src="https://via.placeholder.com/1080x1080?text=Slide%203" />
                  </div>
                  <div className="slider-caption">
                    <div className="box-container">
                      <div className="inner">
                        <h3>Caption 3</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide>
                  <div className="slider-image">
                    <img className="mobile-hidden" src="https://via.placeholder.com/1920x1080?text=Slide%204" />
                    <img className="hidden mobile-displayed" src="https://via.placeholder.com/1080x1080?text=Slide%204" />
                  </div>
                  <div className="slider-caption">
                    <div className="box-container">
                      <div className="inner">
                        <h3>Caption 4</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>

              <div className="clearfix mb40"></div>
            </>
          </section>
        </>
      </section>
    </>
  );
};
export default SliderExample;
