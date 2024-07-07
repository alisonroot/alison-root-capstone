import * as React from "react";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";
import { styled, Box } from "@mui/system";

const blueGreen = "#3F8ECB";
const green = "#7D9D96";
const yellowGreen = "#BCAC61";
const yellow = "#FABA2C";
const yellowOrange = "#FC8E24";
const lightOrange = "#FD621B";
const orange = "#F3481A";
const red = "#FF0909";

const getTrackColor = (value) => {
  if (value <= 12.5) return blueGreen;
  if (value <= 25) return green;
  if (value <= 35) return yellowGreen;
  if (value <= 50) return yellow;
  if (value <= 60) return yellowOrange;
  if (value <= 75) return lightOrange;
  if (value <= 90) return orange;
  return red;
};

const StyledSlider = styled(BaseSlider)(
  ({ theme, value }) => `
  height: 190px;
  width: 40px;
  display: flex;
  position: relative;
  margin-top: 0.75rem;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    height: 100%;
    width: 40px;
    border-radius: 43px;
    background-color: currentColor;
    opacity: 0.5;
    background: linear-gradient(0deg, rgba(0,188,242,1) 0%, rgba(250,186,44,1) 50%, rgba(243,72,26,1) 80%, rgba(255,9,9,1) 100%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    max-height: calc(100% - 12px);
    width: 28px;
    margin: 6px;
    border-radius: 43px;
    background-color: ${getTrackColor(value)};
    z-index: 2;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: #fefdf9;
    left: 100%;
    -webkit-transform: translate(-50%, 50%);
    -moz-transform: translate(-50%, 50%);
    -ms-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
    transition-property: box-shadow, width, height;
    transition-timing-function: ease;
    transition-duration: 120ms;
    z-index: 4;

    &:hover {
      box-shadow: 0 0 0 4px rgb(178, 176, 172, 0.2);
    }

    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 6px rgb(178, 176, 172, 0.3);
      outline: none;
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 6px rgb(178, 176, 172, 0.3);
      outline: none;
      width: 22px;
      height: 22px;
    }
  }
`
);

const MarksContainer = styled("div")`
  position: absolute;
  margin-top: 10px;
  height: 90%;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Mark = styled("div")`
  position: absolute;
  width: 5px;
  height: 1px;
  background-color: #fdf4e2;
  z-index: 3;
`;

const Reflections = styled("div")`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 19px;
  margin-top: -13px;
`;

const ReflectionLine = styled("div")`
  width: 4px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  z-index: 5;
`;

const ReflectionLowerLine = styled(ReflectionLine)`
  height: 20px; // Height of the lower line
`;

export default function Thermometer() {
  const [value, setValue] = React.useState(35);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="thermometer-container"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "scale(2.5)",
        transformOrigin: "center",
      }}
    >
      <Box
        className="thermometer"
        sx={{
          height: 200,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Reflections>
          <ReflectionLine />
          <ReflectionLowerLine />
        </Reflections>
        <MarksContainer>
          {[...Array(9)].map((_, index) => (
            <Mark
              key={index}
              style={{
                top: `${(index + 1) * 10}%`,
              }}
            />
          ))}
        </MarksContainer>
        <StyledSlider
          orientation="vertical"
          value={value}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}