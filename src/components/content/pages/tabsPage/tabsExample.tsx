import { Tabs, TabItem } from "@3ffect/gstring";

export default function TabsExample() {
  return (
    <Tabs defaultActiveTab="tab1">
      <TabItem id="tab1" key="tab1" title="Tab 1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nulla quia tempore dolore? Voluptas totam cupiditate quam, sint doloribus voluptatibus provident sed excepturi, amet, blanditiis dolore? Fuga magnam
        ducimus quis!
      </TabItem>
      <TabItem id="tab2" key="tab2" title="Tab 2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates qui ullam repudiandae aperiam fugit dicta dignissimos magni quia rerum quae natus. Ipsum voluptas et inventore voluptates atque totam
        dignissimos error, iste, ea harum, sapiente quas praesentium soluta voluptatum sint beatae voluptatibus asperiores architecto dolor? Assumenda commodi aperiam vel. Pariatur.
      </TabItem>
    </Tabs>
  );
}
