import React from "react";
import AccordionExample from "components/content/pages/accordiosPage/accordion-example";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export default class AccordionsPage extends React.Component {
  render() {
    return (
      <div className="inner">
        <AccordionExample />
        <SyntaxHighlighter language="typescript" style={vs}>
          {
            'import Accordion, {\n  AccordionItem,\n  AccordionHeader,\n  AccordionContent,\n} from "../accordion/accordion";\n\nexport default function AccordionExample() {\n  return (\n    <Accordion openedIndexes={[0]}>\n      <AccordionItem\n        className=""\n        icon={{ className: "fa fa-chevron-down", rotate: true }}\n      >\n        <AccordionHeader>Lorem ipsum dolor sit amet</AccordionHeader>\n        <AccordionContent>\n          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est\n          laborum.\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem icon={{ className: "fa fa-chevron-down", rotate: true }}>\n        <AccordionHeader>Lorem ipsum dolor sit amet</AccordionHeader>\n        <AccordionContent>\n          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est\n          laborum.\n        </AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  );\n}\n'
          }
        </SyntaxHighlighter>
      </div>
    );
  }
}
