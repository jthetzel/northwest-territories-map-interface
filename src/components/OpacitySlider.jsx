import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

function OpacitySlider() {
  return (
    <Slider aria-label="slider-ex-1" defaultValue={30} minW="4rem">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}

export default OpacitySlider;
