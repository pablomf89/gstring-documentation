import { Slide, Slider, SliderArrows, SliderPaginator, SliderPause } from "@3ffect/gstring";
import React, { ReactElement } from "react";
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
                  <div className="slider-image" style={{ paddingBottom: "56.25%", height: "0", position: "relative" }}>
                    <img src="https://via.placeholder.com/1920x820?text=Slide%201" style={{ display: "block", top: "0", left: "0", height: "100%", width: "100%", position: "absolute" }} />
                  </div>
                  <div className="slider-caption">
                    <div className="box-container">
                      <div className="inner">
                        <h3>Caption 1</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide>
                  <div className="slider-image" style={{ paddingBottom: "56.25%", height: "0", position: "relative" }}>
                    <img src="https://via.placeholder.com/1920x820?text=Slide%202" style={{ display: "block", top: "0", left: "0", height: "100%", width: "100%", position: "absolute" }} />
                  </div>
                  <div className="slider-caption">
                    <div className="box-container">
                      <div className="inner">
                        <h3>Caption 2</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide>
                  <div className="slider-image" style={{ paddingBottom: "56.25%", height: "0", position: "relative" }}>
                    <img src="https://via.placeholder.com/1920x820?text=Slide%203" style={{ display: "block", top: "0", left: "0", height: "100%", width: "100%", position: "absolute" }} />
                  </div>
                  <div className="slider-caption">
                    <div className="box-container">
                      <div className="inner">
                        <h3>Caption 3</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide>
                  <div className="slider-image" style={{ paddingBottom: "56.25%", height: "0", position: "relative" }}>
                    <img src="https://via.placeholder.com/1920x820?text=Slide%204" style={{ display: "block", top: "0", left: "0", height: "100%", width: "100%", position: "absolute" }} />
                  </div>
                  <div className="slider-caption">
                    <div className="box-container">
                      <div className="inner">
                        <h3>Caption 4</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.
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
