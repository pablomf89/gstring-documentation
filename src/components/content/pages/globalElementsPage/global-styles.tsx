import React, { ReactElement } from "react";

export const GlobalStyles: React.FC = (): ReactElement => {
  return (
    <>
      <h1>h1 Lorem ipsum</h1>
      <h2>h2 Lorem ipsum</h2>
      <h3>h3 Lorem ipsum</h3>
      <h4>h4 Lorem ipsum</h4>
      <h5>h5 Lorem ipsum</h5>
      <h6>h6 Lorem ipsum</h6>
      <p>Parragraph</p>
      <p>
        Parragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <p>
        <a href="#1" title="link to">
          Link
        </a>
      </p>
      <p>
        <strong>Strong</strong> <em>Italic</em> <small>Small</small>
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <ol>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ol>

      {/* <div className="row ui-section  mb20">
        <div className="inner">
          <h3 className="title">COLOR PALETTE</h3>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="color-palette bg-primary">
                <span className="color-grey">Primary</span>
              </div>
              <div className="color-palette bg-active">
                <span className="color-grey">Accent</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="color-palette bg-error">
                <span className="color-grey">error</span>
              </div>
              <div className="color-palette bg-info">
                <span className="color-grey">info</span>
              </div>
              <div className="color-palette bg-success">
                <span className="color-grey">success</span>
              </div>
              <div className="color-palette bg-warning">
                <span className="color-grey">warning</span>
              </div>
            </div>
            <div className="d-flex">
              <div
                className="color-palette bg-white"
                style={{ border: "1px solid grey" }}
              >
                <span>white</span>
              </div>
              <div className="color-palette bg-input-grey">
                <span>
                  input
                  <br />
                  bg
                </span>
              </div>
              <div className="color-palette bg-light-grey">
                <span>
                  light
                  <br />
                  grey
                </span>
              </div>
              <div className="color-palette bg-grey">
                <span className="color-grey">grey</span>
              </div>
              <div className="color-palette bg-dark-grey">
                <span className="color-grey">
                  dark
                  <br />
                  grey
                </span>
              </div>
              <div className="color-palette bg-black">
                <span className="color-grey">black</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" mb20">
        <h3 className="title">DIVIDER</h3>

        <hr className="mb-4" />
      </div>
      <div className="mb20">
        <h3 className="title">TABLE</h3>
        <table>
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">First</th>
              <th scope="col">Second</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>John</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Charles</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>Tim</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GlobalStyles;
