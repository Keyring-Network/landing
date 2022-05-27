import React, { useMemo } from 'react';
import { easings } from 'react-spring';

import * as styles from './AnimatedSVG.module.css';
import {
  SvgElement1,
  SvgElement2,
  SvgElement3,
  SvgElement4,
  SvgElement5,
  SvgElement6,
  SvgElement7,
  SvgCircle,
} from './components/';

const inOutEasing = (x) => 0.5 * (Math.sin((x - 0.5) * Math.PI) + 1);

const AnimatedSVG = ({ hover }) => {
  const isHover = useMemo(() => hover, [hover]);

  const currentEasing = isHover ? easings.easeOutQuart : inOutEasing;

  return (
    <div className={styles.animatedSvg}>
      <SvgCircle hover={isHover} delay={0} easing={currentEasing} />

      <svg
        width='932'
        height='932'
        viewBox='0 0 932 932'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g className={styles.animatedSvgGroup}>
          <SvgElement1 hover={isHover} delay={0} easing={currentEasing} />
          <SvgElement2 hover={isHover} delay={0} easing={currentEasing} />
          <SvgElement3 hover={isHover} delay={0} easing={currentEasing} />
          <SvgElement4 hover={isHover} delay={0} easing={currentEasing} />
          <SvgElement5 hover={isHover} delay={0} easing={currentEasing} />
          <SvgElement6 hover={isHover} delay={0} easing={currentEasing} />
          <SvgElement7 hover={isHover} delay={0} easing={currentEasing} />
        </g>

        <defs>
          <filter
            id='filter0_f_852_756'
            x='0.169922'
            y='0.864258'
            width='930.82'
            height='930.821'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='125'
              result='effect1_foregroundBlur_852_756'
            />
          </filter>
          <filter
            id='filter1_f_852_756'
            x='0.169922'
            y='0.864258'
            width='930.82'
            height='930.821'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='125'
              result='effect1_foregroundBlur_852_756'
            />
          </filter>
          <linearGradient
            id='paint0_linear_852_756'
            x1='589.852'
            y1='174.78'
            x2='504.117'
            y2='717.711'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2EE297' />
            <stop offset='1' stopColor='#1DC9D4' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_852_756'
            x1='608.811'
            y1='207.529'
            x2='523.076'
            y2='750.46'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2EE297' />
            <stop offset='1' stopColor='#1DC9D4' />
          </linearGradient>
          <linearGradient
            id='paint2_linear_852_756'
            x1='589.725'
            y1='173.934'
            x2='503.99'
            y2='716.865'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2EE297' />
            <stop offset='1' stopColor='#1DC9D4' />
          </linearGradient>
          <linearGradient
            id='paint3_linear_852_756'
            x1='589.274'
            y1='174.995'
            x2='503.539'
            y2='717.927'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2EE297' />
            <stop offset='1' stopColor='#1DC9D4' />
          </linearGradient>
          <linearGradient
            id='paint4_linear_852_756'
            x1='608.92'
            y1='207.489'
            x2='523.185'
            y2='750.42'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2EE297' />
            <stop offset='1' stopColor='#1DC9D4' />
          </linearGradient>
          <linearGradient
            id='paint5_linear_852_756'
            x1='589.725'
            y1='174.64'
            x2='503.99'
            y2='717.572'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2EE297' />
            <stop offset='1' stopColor='#1DC9D4' />
          </linearGradient>
          <linearGradient
            id='paint6_linear_852_756'
            x1='589.494'
            y1='175.379'
            x2='503.76'
            y2='718.31'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2EE297' />
            <stop offset='1' stopColor='#1DC9D4' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedSVG;
