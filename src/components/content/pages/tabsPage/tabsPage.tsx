import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import TabsExample from "./tabsExample";
export default class TabsPage extends React.Component {
  render() {
    return (
      <>
        <div className="inner">
          <TabsExample />
          <SyntaxHighlighter language="typescript" style={vs}>
            {
              'import Tabs, { TabItem } from "components/shared/tabs/tabs";\nimport React from "react";\n\nexport default function TabsExample() {\n  return (\n    <Tabs className="m2" defaultActiveTab="tab1">\n      <TabItem id="tab1" key="tab1" title="Tab 1">\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nulla quia tempore dolore? Voluptas totam cupiditate quam, sint doloribus voluptatibus provident sed excepturi, amet, blanditiis dolore? Fuga magnam\n        ducimus quis!\n      </TabItem>\n      <TabItem id="tab2" key="tab2" title="Tab 2">\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates qui ullam repudiandae aperiam fugit dicta dignissimos magni quia rerum quae natus. Ipsum voluptas et inventore voluptates atque totam\n        dignissimos error, iste, ea harum, sapiente quas praesentium soluta voluptatum sint beatae voluptatibus asperiores architecto dolor? Assumenda commodi aperiam vel. Pariatur.\n      </TabItem>\n    </Tabs>\n  );\n}\n'
            }
          </SyntaxHighlighter>
        </div>
      </>
    );
  }
}
