import * as React from "react";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";
import { styled } from "@mui/system";
import "./Thermometer.scss";

const blueGreen = "#008083";
const green = "#249ea0";
const yellow = "#faab36";
const orange = "#f78104";
const red = "#fd5901";

const getTrackColor = (value) => {
  if (value <= 15) return blueGreen;
  if (value <= 35) return green;
  if (value <= 60) return yellow;
  if (value <= 85) return orange;
  return red;
};

const StyledSlider = styled(BaseSlider)(
  ({ value }) => `
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
    opacity: 0.6;
    background: linear-gradient(0deg, #008083, #249ea0, #faab36, #f78104, #fd5901);;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
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
    background-color: #ffffff;
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
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 3;
`;

const Reflections = styled("div")`
  position: absolute;
  top: 43px;
  left: 9px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ReflectionLine = styled("div")`
  width: 4px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  z-index: 5;
`;

const ReflectionLowerLine = styled(ReflectionLine)`
  height: 20px;
`;

export default function Thermometer({ intensity, onChange }) {
  const [value, setValue] = React.useState(35);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  React.useEffect(() => {
    setValue(intensity);
  }, [intensity]);

  return (
    <div className="thermometer">
      <div className="thermometer__container">
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
      </div>
    </div>
  );
}
