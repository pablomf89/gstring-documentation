import MainNav from "components/master/navigation/mainNav/MainNav";
import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="inner">
          <h1>
            Welcome to <strong>Gstring</strong>
          </h1>
          <h3>Step 1: Download the npm package</h3>
          <ol>
            <li>
              <p>
                Open a terminal window and navigate to your React project
                directory.
              </p>
            </li>
            <li>
              <p>
                Install the gstring library from npm by running the following
                command: <code>npm install gstring</code>
              </p>
            </li>
            <li>
              <p>
                Import the gstring library into your React component where you
                want to use it by adding the following line at the top of your
                file: <code>import gstring from 'gstring';</code>
              </p>
            </li>
            <li>
              <p>
                Use the gstring library in your React component by calling its
                methods and passing any required arguments. For example, if
                gstring has a method called <code>baz</code> that takes a string
                as an argument, you can use it like this:{" "}
                <code>gstring.baz('Hello, world!')</code>
              </p>
            </li>
            <li>
              <p>
                Once you have finished using the gstring library in your React
                component, you can save your changes and test them by running
                your React app.
              </p>
            </li>
          </ol>
          <h3>Step 2. Take a look to the gstring features</h3>
          <div className="mb20">
            <MainNav />
          </div>

          <h3>Step 3. Copy the examples and start using it</h3>
          <div className="request-:R2d6:-4 markdown prose dark:prose-invert break-words light">
            <p>
              To use the examples from gstring in your React project, you will
              first need to install the gstring library and its dependencies by
              running the following command in your terminal:
            </p>
            <pre>
              <div className="bg-grey mb-4 rounded-md">
                <div className="p-4">
                  <code className="!whitespace-pre-wrap hljs">
                    npm install gstring{"\n"}
                  </code>
                </div>
              </div>
            </pre>
            <p>
              Once the gstring library is installed, you can import the
              individual components that you want to use in your React component
              files. For example, to use the <code>Button</code> component from
              gstring, you would import it like this:
            </p>
            <pre>
              <div className="bg-grey mb-4 rounded-md">
                <div className="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"></div>
                <div className="p-4">
                  <code className="!whitespace-pre-wrap hljs language-python">
                    <span className="hljs-keyword">import</span> Button{" "}
                    <span className="hljs-keyword">from</span>{" "}
                    <span className="hljs-string">'react-gstring/Button'</span>;
                    {"\n"}
                  </code>
                </div>
              </div>
            </pre>
            <p>
              You can then use the <code>Button</code> component in your React
              components by using the <code>&lt;Button&gt;</code> JSX tag. For
              example:
            </p>
            <pre>
              <div className="bg-grey mb-4 rounded-md">
                <div className="p-4">
                  <code className="!whitespace-pre-wrap hljs language-php-template">
                    <span className="xml">
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">Button</span>{" "}
                        <span className="hljs-attr">variant</span>=
                        <span className="hljs-string">"primary"</span>&gt;
                      </span>
                      Click me!
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">Button</span>&gt;
                      </span>
                      {"\n"}
                    </span>
                  </code>
                </div>
              </div>
            </pre>
            <p>
              In addition to importing the individual components that you want
              to use, you will also need to include the gstring CSS styles in
              your project. This can be done by importing the gstring CSS file
              in the entry point of your app, such as the <code>index.js</code>{" "}
              file.
            </p>
            <pre>
              <div className="bg-grey mb-4 rounded-md">
                <div className="p-4">
                  <code className="!whitespace-pre-wrap hljs language-python">
                    <span className="hljs-keyword">import</span>{" "}
                    <span className="hljs-string">
                      'gstring/dist/css/gstring.min.css'
                    </span>
                    ;{"\n"}
                  </code>
                </div>
              </div>
            </pre>
            <p>
              After importing the gstring CSS, you should be able to use the
              gstring components and styles in your React project. I hope this
              helps! Let me know if you have any other questions.
            </p>
          </div>
        </div>
      </>
    );
  }
}
