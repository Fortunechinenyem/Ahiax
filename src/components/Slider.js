import React from "react";
import { SliderData } from "./SliderData";

import ImageSlider from "./SliderImage";

function Slider() {
  return <ImageSlider slides={SliderData} />;
}

export default Slider;
