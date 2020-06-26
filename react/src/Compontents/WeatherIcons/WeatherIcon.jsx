import React from "react";
import Thunder from "./Icons/Thunder";
import styled from "styled-components";
import Rain from "./Icons/Rain";
import Snow from "./Icons/Snow";
import SunCloud from "./Icons/SunCloud";
import Sun from "./Icons/Sun";
import Windy from "./Icons/Windy";

const WeatherIcon = ({ type }) => {
  switch (type) {
    case "thunder":
      return (
        <IconContainer>
          <Thunder />
        </IconContainer>
      );
    case "rain":
      return (
        <IconContainer>
          <Rain />
        </IconContainer>
      );
    case "snow":
      return (
        <IconContainer>
          <Snow />
        </IconContainer>
      );
    case "sun-cloud":
      return (
        <IconContainer>
          <SunCloud />
        </IconContainer>
      );
    case "sun":
      return (
        <IconContainer>
          <Sun />
        </IconContainer>
      );
    case "windy":
      return (
        <IconContainer>
          <Windy />
        </IconContainer>
      );
    default:
      return (
        <IconContainer>
          <Thunder />
        </IconContainer>
      );
  }
};

export default WeatherIcon;

const IconContainer = styled.div`
  svg {
    width: 120px;
    height: 120px;
    //margin: 24px 0 0 40px;
    fill: #fff;
  }

  /* Thunder Bolt Animation */
  .thunder-cloud .bolt {
    animation: flash 2s infinite;
  }

  @keyframes flash {
    0% {
      transform: translateY(-25px) translateX(25px) scaleY(0.95);
      opacity: 0;
    }
    5%,
    25% {
      opacity: 1;
    }
    15%,
    20% {
      opacity: 0;
    }
    50% {
      transform: translateY(8px) translateX(-10px);
      opacity: 1;
    }
    80% {
      transform: translateY(8px) translateX(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(-25px) translateX(25px) scaleY(0.95);
      opacity: 0;
    }
  }

  /* Raindrops Animation */
  .rain-cloud .raindrop-one,
  .rain-cloud .raindrop-two,
  .rain-cloud .raindrop-three {
    opacity: 0;
    animation-timing-function: cubic-bezier(1, 0, 1, 1);
  }

  .rain-cloud .raindrop-one {
    animation: falling-drop-one 2s infinite;
  }

  .rain-cloud .raindrop-two {
    animation: falling-drop-two 1.9s infinite;
    animation-delay: 0.8s;
  }

  .rain-cloud .raindrop-three {
    animation: falling-drop-three 1.8s infinite;
    animation-delay: 0.5s;
  }

  @keyframes falling-drop-one {
    0% {
      transform: translateY(-35px);
      opacity: 0;
    }
    10% {
      transform: translateY(-15px);
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    60% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(-35px);
      opacity: 0;
    }
  }

  @keyframes falling-drop-two {
    0% {
      transform: translateY(-105px);
      opacity: 0;
    }
    10% {
      transform: translateY(-85px);
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    60% {
      transform: translateY(5px);
      opacity: 0;
    }
    100% {
      transform: translateY(-105px);
      opacity: 0;
    }
  }

  @keyframes falling-drop-three {
    0% {
      transform: translateY(-105px);
      opacity: 0;
    }
    10% {
      transform: translateY(-85px);
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    60% {
      transform: translateY(35px);
      opacity: 0;
    }
    100% {
      transform: translateY(-105px);
      opacity: 0;
    }
  }

  /* Snowflake Animations */
  .snow-cloud .snowflake-one,
  .snow-cloud .snowflake-two,
  .snow-cloud .snowflake-three {
    opacity: 0;
    transform-origin: center center;
    animation-timing-function: ease-in;
  }

  .snow-cloud .snowflake-one {
    animation: falling-snow-one 4s infinite;
  }

  .snow-cloud .snowflake-two {
    animation: falling-snow-two 3.8s infinite;
    animation-delay: 2.5s;
  }

  .snow-cloud .snowflake-three {
    animation: falling-snow-three 3.9s infinite;
    animation-delay: 1.5s;
  }

  @keyframes falling-snow-one {
    0% {
      transform: translateY(-65px) rotate(0);
      opacity: 0;
    }
    20% {
      transform: translateY(-10px) translateX(30px) rotate(-30deg);
      opacity: 1;
    }
    40% {
      transform: translateY(45px) translateX(-30px) rotate(30deg);
    }
    50% {
      opacity: 1;
    }
    60% {
      transform: translateY(100px) translateX(30px) rotate(-30deg);
      opacity: 0;
    }
    100% {
      transform: translateY(-65px);
      opacity: 0;
    }
  }

  @keyframes falling-snow-two {
    0% {
      transform: translateY(-75px) rotate(0);
      opacity: 0;
    }
    20% {
      transform: translateY(-45px) translateX(40px) rotate(-30deg);
      opacity: 1;
    }
    40% {
      transform: translateY(5px) translateX(-40px) rotate(30deg);
    }
    50% {
      opacity: 1;
    }
    60% {
      transform: translateY(30px) translateX(20px) rotate(-30deg);
      opacity: 0;
    }
    100% {
      transform: translateY(-75px);
      opacity: 0;
    }
  }

  @keyframes falling-snow-three {
    0% {
      transform: translateY(-85px) rotate(0);
      opacity: 0;
    }
    20% {
      transform: translateY(-10px) translateX(-30px) rotate(30deg);
      opacity: 1;
    }
    40% {
      transform: translateY(25px) translateX(30px) rotate(-30deg);
    }
    50% {
      opacity: 1;
    }
    60% {
      transform: translateY(60px) translateX(-30px) rotate(30deg);
      opacity: 0;
    }
    100% {
      transform: translateY(-85px);
      opacity: 0;
    }
  }

  /* Sunny Cloud Animations */
  .sun-cloud .sun-half {
    animation: sun-grow 4s infinite cubic-bezier(0.2, 0.85, 0.4, 1.5);
    transform-origin: bottom center;
  }

  .sun-cloud .ray-one {
    animation: ray-show-one 4s infinite linear;
    transform-origin: center right;
  }
  .sun-cloud .ray-two {
    animation: ray-show-two 4s infinite linear;
    transform-origin: bottom right;
  }
  .sun-cloud .ray-three {
    animation: ray-show-three 4s infinite linear;
    transform-origin: bottom center;
  }
  .sun-cloud .ray-four {
    animation: ray-show-four 4s infinite linear;
    transform-origin: bottom left;
  }
  .sun-cloud .ray-five {
    animation: ray-show-five 4s infinite linear;
    transform-origin: center left;
  }

  @keyframes sun-grow {
    0%,
    90%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    15%,
    80% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ray-show-one {
    0%,
    15%,
    80%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    20%,
    70% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ray-show-two {
    0%,
    20%,
    80%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    25%,
    70% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ray-show-three {
    0%,
    25%,
    80%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    30%,
    70% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ray-show-four {
    0%,
    30%,
    80%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    35%,
    70% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ray-show-five {
    0%,
    35%,
    80%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    40%,
    70% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ray-show-six {
    0%,
    40%,
    80%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    45%,
    70% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ray-show-seven {
    0%,
    45%,
    80%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    50%,
    70% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ray-show-eight {
    0%,
    50%,
    80%,
    100% {
      transform: scale(0.5);
      opacity: 0;
    }
    55%,
    70% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Sunshine Animation */
  /* If only using this animation be sure to grab the sun-grow and ray-show-x keyframes set above */
  .sunshine .sun-full {
    animation: sun-grow 4s infinite cubic-bezier(0.2, 0.85, 0.4, 1.5);
    transform-origin: center center;
  }

  .sunshine .sun-ray-one {
    animation: ray-show-one 4s infinite ease-in;
    transform-origin: center right;
  }

  .sunshine .sun-ray-two {
    animation: ray-show-two 4s infinite ease-in;
    transform-origin: bottom right;
  }

  .sunshine .sun-ray-three {
    animation: ray-show-three 4s infinite ease-in;
    transform-origin: bottom center;
  }

  .sunshine .sun-ray-four {
    animation: ray-show-four 4s infinite ease-in;
    transform-origin: bottom left;
  }

  .sunshine .sun-ray-five {
    animation: ray-show-five 4s infinite ease-in;
    transform-origin: center left;
  }

  .sunshine .sun-ray-six {
    animation: ray-show-six 4s infinite ease-in;
    transform-origin: top left;
  }

  .sunshine .sun-ray-seven {
    animation: ray-show-seven 4s infinite ease-in;
    transform-origin: top center;
  }

  .sunshine .sun-ray-eight {
    animation: ray-show-eight 4s infinite ease-in;
    transform-origin: top right;
  }

  /* Windy Cloud Animation */
  .windy-cloud .cloud-wrap {
    animation: bob 2s infinite cubic-bezier(0, 0, 0.5, 1.5);
  }
  .windy-cloud .cloud {
    animation: cloud-push 4s infinite;
    transform-origin: left center;
  }
  .windy-cloud .wind-one {
    animation: wind-slide-one 4s infinite;
  }
  .windy-cloud .wind-two {
    animation: wind-slide-two 4s infinite;
  }
  .windy-cloud .wind-three {
    animation: wind-slide-three 4s infinite;
  }

  @keyframes bob {
    0%,
    100% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes cloud-push {
    0%,
    80%,
    100% {
      transform: translateX(-120px) scale(1.2);
    }
    10%,
    60% {
      transform: translateX(0) scale(1);
    }
  }

  @keyframes wind-slide-one {
    0%,
    70%,
    100% {
      transform: scaleX(0);
      opacity: 0;
    }
    10%,
    60% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes wind-slide-two {
    0%,
    70%,
    100% {
      transform: scaleX(0);
      opacity: 0;
    }
    10%,
    60% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes wind-slide-three {
    0%,
    70%,
    100% {
      transform: scaleX(0);
      opacity: 0;
    }
    10%,
    60% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;
