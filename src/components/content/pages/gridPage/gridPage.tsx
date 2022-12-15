export default function GridPage() {
  return (
    <div className="box-container  mb20">
      <div className="box-12">
        <div className="inner bg-primary color-white">12</div>
      </div>
      <div className="box-11">
        <div className="inner bg-primary color-white">11</div>
      </div>
      <div className="box-1">
        <div className="inner bg-primary color-white">1</div>
      </div>
      <div className="box-10">
        <div className="inner bg-primary color-white">10</div>
      </div>
      <div className="box-2">
        <div className="inner bg-primary color-white">2</div>
      </div>
      <div className="box-9">
        <div className="inner bg-primary color-white">9</div>
      </div>
      <div className="box-3">
        <div className="inner bg-primary color-white">3</div>
      </div>
      <div className="box-8">
        <div className="inner bg-primary color-white">8</div>
      </div>
      <div className="box-4">
        <div className="inner bg-primary color-white">4</div>
      </div>
      <div className="box-7">
        <div className="inner bg-primary color-white">7</div>
      </div>
      <div className="box-5">
        <div className="inner bg-primary color-white">5</div>
      </div>
      <div className="box-6">
        <div className="inner bg-primary color-white">6</div>
      </div>
      <div className="box-6">
        <div className="inner bg-primary color-white">6</div>
      </div>
      <div className="clearfix mb20" />
      <p>
        <strong>Nest the boxes</strong>
      </p>
      <div className="box-6 ">
        <div className="inner ">
          6
          <div className="clearfix" />
          <div className="box-6">
            <div className="inner bg-primary color-white">6</div>
          </div>
          <div className="box-6">
            <div className="inner bg-primary color-white">6</div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="box-6  ">
        <div className="inner">
          6
          <div className="clearfix" />
          <div className="box-3">
            <div className="inner bg-primary c3">3</div>
          </div>
          <div className="box-3">
            <div className="inner bg-primary c3">3</div>
          </div>
          <div className="box-3">
            <div className="inner bg-primary c3">3</div>
          </div>
          <div className="box-3">
            <div className="inner bg-primary c3">3</div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="clearfix mb20" />
      <p>
        <strong>Customizable grid</strong>
      </p>
      <p>Allows you to change the margins, paddings, add more breakpoints... etc. Just using SASS and changing the value in the variables.scss file</p>
    </div>
  );
}
