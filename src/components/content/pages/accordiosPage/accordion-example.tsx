import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from "@3ffect/gstring";
export default function AccordionExample() {
  return (
    <Accordion openedIndexes={[0]}>
      <AccordionItem className="" icon={{ className: "fa fa-chevron-down", rotate: true }}>
        <AccordionHeader>Lorem ipsum dolor sit amet</AccordionHeader>
        <AccordionContent>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem icon={{ className: "fa fa-chevron-down", rotate: true }}>
        <AccordionHeader>Lorem ipsum dolor sit amet</AccordionHeader>
        <AccordionContent>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
