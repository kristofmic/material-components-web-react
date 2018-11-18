import * as React from "react";
import "../../../packages/line-ripple/index.scss";
import "./index.scss";
import LineRipple from "../../../packages/line-ripple";

const LineRippleScreenshotTest = () => {
  return (
    <div>
      <div className="line-ripple-container">
        <LineRipple />
      </div>

      <div className="line-ripple-container">
        <LineRipple active />
      </div>
    </div>
  );
};

export default LineRippleScreenshotTest;
