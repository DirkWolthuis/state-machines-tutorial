<script>
  export let type;
</script>

<style type="text/scss">
  .container {
    svg {
      width: 120px;
      height: 120px;
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
  }
</style>

<div class="container">
  {#if type === 'thunder'}
    <svg
      class="thunder-cloud"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path
        d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
        C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c12.3,10.7,26.2,19,40.9,25.4l24.9-24.9
        c-23.5-7.6-44.2-21.3-59.6-39.9c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
        C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
        c-17.1,0-32.9-5.5-45.9-14.7c-10.4,12.5-23.3,22.7-37.6,30.6L303,312.2c20.9-6.6,40.5-16.9,57.3-31.6c12.6,4.8,26,7.3,39.7,7.3
        c61.8,0,112-50.2,112-112S461.8,64,400,64z" />
      <polygon
        class="bolt"
        points="192,352 224,384 192,480 288,384 256,352 288,256 " />
    </svg>
 

  {:else if type === 'rain'}
    <svg
      class="rain-cloud"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path
        class="raindrop-one"
        d="M96,384c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S96,366.3,96,384z" />
      <path
        class="raindrop-two"
        d="M225,480c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S225,462.3,225,480z" />
      <path
        class="raindrop-three"
        d="M352,448c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S352,430.3,352,448z" />
      <path
        d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
        C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3c38.5,0,75.3-14.1,104.3-39.3
        c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,64,400,64z
        M400,256c-17.1,0-32.9-5.5-45.9-14.7
        C330.6,269.6,295.6,288,256,288c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80
        c10.8,0,21.1,2.2,30.4,6.1C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80
        S444.2,256,400,256z" />
    </svg>
 

  {:else if type === 'snow'}
    <svg
      class="snow-cloud"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path
        d="M512,176c0-61.8-50.2-112-112-112c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1
        c-5.2-0.8-10.5-1.1-15.8-1.1C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
        c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3C461.8,288,512,237.8,512,176z
        M354.1,241.3C330.6,269.6,295.6,288,256,288
        c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
        C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
        C382.9,256,367.1,250.5,354.1,241.3z" />

      <path
        class="snowflake-one"
        d="M131.8,349.9c-1.5-5.6-7.3-8.9-12.9-7.4l-11.9,3.2c-1.1-1.5-2.2-3-3.6-4.4c-1.4-1.4-2.9-2.6-4.5-3.6l3.2-11.9
        c1.5-5.6-1.8-11.4-7.4-12.9c-5.6-1.5-11.4,1.8-12.9,7.4l-3.2,12.1c-3.8,0.3-7.5,1.2-10.9,2.9l-8.8-8.8c-4.1-4.1-10.8-4.1-14.8,0
        c-4.1,4.1-4.1,10.8,0,14.9l8.8,8.8c-1.6,3.5-2.6,7.2-2.9,11l-12,3.2c-5.6,1.5-9,7.2-7.5,12.9c1.5,5.6,7.3,8.9,12.9,7.4l11.9-3.2
        c1.1,1.6,2.2,3.1,3.7,4.5c1.4,1.4,2.9,2.6,4.4,3.6l-3.2,11.9c-1.5,5.6,1.8,11.4,7.4,12.9c5.6,1.5,11.3-1.8,12.8-7.4l3.2-12
        c3.8-0.3,7.5-1.3,11-2.9l8.8,8.8c4.1,4.1,10.7,4,14.8,0c4.1-4.1,4.1-10.7,0-14.8l-8.8-8.8c1.7-3.5,2.7-7.2,2.9-11l12.1-3.2
        C130,361.3,133.3,355.6,131.8,349.9z
        M88.6,371c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.8,0-14.8c4.1-4.1,10.8-4.1,14.9,0
        S92.6,366.9,88.6,371z" />
      <path
        class="snowflake-two"
        d="M304.8,437.6l-12.6-7.2c0.4-2.2,0.7-4.4,0.7-6.7c0-2.3-0.3-4.5-0.7-6.7l12.6-7.2c5.9-3.4,7.9-11,4.5-16.8
        c-3.4-5.9-10.9-7.9-16.8-4.5l-12.7,7.3c-3.4-2.9-7.2-5.2-11.5-6.7v-14.6c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3V389
        c-4.3,1.5-8.1,3.8-11.5,6.7l-12.7-7.3c-5.9-3.4-13.5-1.4-16.9,4.5c-3.4,5.9-1.4,13.4,4.5,16.8l12.5,7.2c-0.4,2.2-0.7,4.4-0.7,6.7
        c0,2.3,0.3,4.5,0.7,6.7l-12.5,7.2c-5.9,3.4-7.9,11-4.5,16.9s10.9,7.9,16.8,4.5l12.7-7.3c3.4,2.9,7.2,5.1,11.5,6.7V473
        c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-14.6c4.3-1.5,8.2-3.8,11.5-6.7l12.7,7.3c5.9,3.4,13.4,1.4,16.8-4.5
        C312.8,448.6,310.7,441.1,304.8,437.6z
        M256,436c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3s12.3,5.5,12.3,12.3
        C268.3,430.5,262.8,436,256,436z" />
      <path
        class="snowflake-three"
        d="M474.2,396.2l-12.1-3.2c-0.3-3.8-1.2-7.5-2.9-11l8.8-8.8c4.1-4.1,4.1-10.8,0-14.9c-4.1-4.1-10.7-4.1-14.8,0
        l-8.8,8.8c-3.5-1.6-7.1-2.6-11-2.9l-3.2-12.1c-1.5-5.6-7.2-8.9-12.9-7.4c-5.6,1.5-8.9,7.3-7.4,12.9l3.2,11.9
        c-1.6,1.1-3.1,2.3-4.5,3.7c-1.4,1.4-2.5,2.9-3.6,4.5l-11.9-3.2c-5.6-1.5-11.4,1.9-12.9,7.4c-1.5,5.6,1.9,11.4,7.4,12.9l12,3.2
        c0.3,3.8,1.3,7.5,3,11l-8.8,8.8c-4.1,4.1-4.1,10.7,0,14.8c4.1,4.1,10.7,4.1,14.8,0l8.8-8.8c3.5,1.7,7.2,2.7,11,3l3.2,12
        c1.5,5.6,7.2,8.9,12.9,7.4c5.6-1.5,9-7.2,7.5-12.9l-3.2-11.9c1.5-1.1,3-2.2,4.5-3.6c1.4-1.4,2.5-2.9,3.6-4.5l11.9,3.2
        c5.6,1.5,11.4-1.9,12.9-7.4C483.1,403.5,479.8,397.8,474.2,396.2z
        M438.3,402.9c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.7,0-14.9
        c4.1-4.1,10.8-4.1,14.9,0C442.4,392.2,442.4,398.9,438.3,402.9z" />
    </svg>
  

  {:else if type === 'sun-cloud'}
    <svg
      class="sun-cloud"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path
        class="sun-half"
        d="M127.8,259.1c3.1-4.3,6.5-8.4,10-12.3c-6-11.2-9.4-24-9.4-37.7c0-44.1,35.7-79.8,79.8-79.8
        c40,0,73.1,29.4,78.9,67.7c11.4,2.3,22.4,5.7,32.9,10.4c-0.4-29.2-12-56.6-32.7-77.3C266.1,109,238,97.4,208.2,97.4
        c-29.9,0-57.9,11.6-79.1,32.8c-21.1,21.1-32.8,49.2-32.8,79.1c0,17.2,3.9,33.9,11.2,48.9c1.5-0.1,3-0.1,4.4-0.1
        C117.3,258,122.6,258.4,127.8,259.1z" />
      <path
        class="cloud"
        d="M400,256c-5.3,0-10.6,0.4-15.8,1.1c-16.8-22.8-39-40.5-64.2-51.7c-10.5-4.6-21.5-8.1-32.9-10.4
        c-10.1-2-20.5-3.1-31.1-3.1c-45.8,0-88.4,19.6-118.2,52.9c-3.5,3.9-6.9,8-10,12.3c-5.2-0.8-10.5-1.1-15.8-1.1c-1.5,0-3,0-4.4,0.1
        C47.9,258.4,0,307.7,0,368c0,61.8,50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
        c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,256,400,256z
        M400,448
        c-17.1,0-32.9-5.5-45.9-14.7C330.6,461.6,295.6,480,256,480c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7
        c-44.2,0-80-35.8-80-80s35.8-80,80-80c7.8,0,15.4,1.2,22.5,3.3c2.7,0.8,5.4,1.7,8,2.8c4.5-8.7,9.9-16.9,16.2-24.4
        C182,241.9,216.8,224,256,224c10.1,0,20,1.2,29.4,3.5c10.6,2.5,20.7,6.4,30.1,11.4c23.2,12.4,42.1,31.8,54.1,55.2
        c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80S444.2,448,400,448z" />

      <path
        class="ray ray-one"
        d="M16,224h32c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,224,16,224z" />
      <path
        class="ray ray-two"
        d="M83.5,106.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6L83.5,60.9c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6L83.5,106.2z" />
      <path
        class="ray ray-three"
        d="M208,64c8.8,0,16-7.2,16-16V16c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C192,56.8,199.2,64,208,64z" />
      <path
        class="ray ray-four"
        d="M332.4,106.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0l-22.6,22.6
        c-6.2,6.2-6.2,16.4,0,22.6S326.2,112.4,332.4,106.2z" />
      <path
        class="ray ray-five"
        d="M352,208c0,8.8,7.2,16,16,16h32c8.8,0,16-7.2,16-16s-7.2-16-16-16h-32C359.2,192,352,199.2,352,208z" />
    </svg>
 

  {:else if type === 'sun'}
    <svg
      class="sunshine"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path
        class="sun-full"
        d="M256,144c-61.8,0-112,50.2-112,112s50.2,112,112,112s112-50.2,112-112S317.8,144,256,144z
        M256,336
        c-44.2,0-80-35.8-80-80s35.8-80,80-80s80,35.8,80,80S300.2,336,256,336z" />
      <path
        class="sun-ray-eight"
        d="M131.6,357.8l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6s16.4,6.2,22.6,0l22.6-22.6c6.2-6.3,6.2-16.4,0-22.6
        C147.9,351.6,137.8,351.6,131.6,357.8z" />
      <path
        class="sun-ray-seven"
        d="M256,400c-8.8,0-16,7.2-16,16v32c0,8.8,7.2,16,16,16s16-7.2,16-16v-32C272,407.2,264.8,400,256,400z" />
      <path
        class="sun-ray-six"
        d="M380.5,357.8c-6.3-6.2-16.4-6.2-22.6,0c-6.3,6.2-6.3,16.4,0,22.6l22.6,22.6c6.2,6.2,16.4,6.2,22.6,0
        s6.2-16.4,0-22.6L380.5,357.8z" />
      <path
        class="sun-ray-five"
        d="M448,240h-32c-8.8,0-16,7.2-16,16s7.2,16,16,16h32c8.8,0,16-7.2,16-16S456.8,240,448,240z" />
      <path
        class="sun-ray-four"
        d="M380.4,154.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6s-16.4-6.2-22.6,0l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6
        C364.1,160.4,374.2,160.4,380.4,154.2z" />
      <path
        class="sun-ray-three"
        d="M256,112c8.8,0,16-7.2,16-16V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C240,104.8,247.2,112,256,112z" />
      <path
        class="sun-ray-two"
        d="M131.5,154.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6L131.5,154.2z" />
      <path
        class="sun-ray-one"
        d="M112,256c0-8.8-7.2-16-16-16H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h32C104.8,272,112,264.8,112,256z" />
    </svg>
  

  {:else if type === 'windy'}
    <svg
      class="windy-cloud"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <g class="cloud-wrap">
        <path
          class="cloud"
          d="M417,166.1c-24-24.5-57.1-38.8-91.7-38.8c-34.6,0-67.7,14.2-91.7,38.8c-52.8,2.5-95,46.2-95,99.6
          c0,55,44.7,99.7,99.7,99.7c5.8,0,11.6-0.5,17.3-1.5c20.7,13.5,44.9,20.9,69.7,20.9c24.9,0,49.1-7.3,69.8-20.9
          c5.7,1,11.5,1.5,17.3,1.5c54.9,0,99.6-44.7,99.6-99.7C512,212.3,469.8,168.5,417,166.1z
          M412.4,333.3c-8.3,0-16.4-1.5-24-4.4
          c-17.5,15.2-39.8,23.8-63.1,23.8c-23.2,0-45.5-8.5-63-23.8c-7.6,2.9-15.8,4.4-24,4.4c-37.3,0-67.7-30.4-67.7-67.7
          c0-37.3,30.4-67.7,67.7-67.7c3.2,0,6.4,0.2,9.5,0.7c18.1-24.6,46.5-39.4,77.5-39.4c30.9,0,59.4,14.8,77.5,39.4
          c3.1-0.5,6.3-0.7,9.6-0.7c37.3,0,67.6,30.4,67.6,67.7C480,303,449.7,333.3,412.4,333.3z" />
      </g>
      <path
        class="wind-three"
        d="M144,352H16c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S152.8,352,144,352z" />
      <path
        class="wind-two"
        d="M16,320h94c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,320,16,320z" />
      <path
        class="wind-one"
        d="M16,256h64c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,256,16,256z" />
    </svg>
  {:else}
    <svg
      class="sunshine"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path
        class="sun-full"
        d="M256,144c-61.8,0-112,50.2-112,112s50.2,112,112,112s112-50.2,112-112S317.8,144,256,144z
        M256,336
        c-44.2,0-80-35.8-80-80s35.8-80,80-80s80,35.8,80,80S300.2,336,256,336z" />
      <path
        class="sun-ray-eight"
        d="M131.6,357.8l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6s16.4,6.2,22.6,0l22.6-22.6c6.2-6.3,6.2-16.4,0-22.6
        C147.9,351.6,137.8,351.6,131.6,357.8z" />
      <path
        class="sun-ray-seven"
        d="M256,400c-8.8,0-16,7.2-16,16v32c0,8.8,7.2,16,16,16s16-7.2,16-16v-32C272,407.2,264.8,400,256,400z" />
      <path
        class="sun-ray-six"
        d="M380.5,357.8c-6.3-6.2-16.4-6.2-22.6,0c-6.3,6.2-6.3,16.4,0,22.6l22.6,22.6c6.2,6.2,16.4,6.2,22.6,0
        s6.2-16.4,0-22.6L380.5,357.8z" />
      <path
        class="sun-ray-five"
        d="M448,240h-32c-8.8,0-16,7.2-16,16s7.2,16,16,16h32c8.8,0,16-7.2,16-16S456.8,240,448,240z" />
      <path
        class="sun-ray-four"
        d="M380.4,154.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6s-16.4-6.2-22.6,0l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6
        C364.1,160.4,374.2,160.4,380.4,154.2z" />
      <path
        class="sun-ray-three"
        d="M256,112c8.8,0,16-7.2,16-16V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C240,104.8,247.2,112,256,112z" />
      <path
        class="sun-ray-two"
        d="M131.5,154.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6L131.5,154.2z" />
      <path
        class="sun-ray-one"
        d="M112,256c0-8.8-7.2-16-16-16H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h32C104.8,272,112,264.8,112,256z" />
    </svg>
  {/if}
</div>
