import React from 'react';
import { useSpring, animated } from 'react-spring';

import greenImg from '../../../../../../../../../../assets/images/green.webp';
import blueImg from '../../../../../../../../../../assets/images/blue.webp';
import useMediaQuery from '../../../../../../../../../../hooks/useMediaQuery';

import * as styles from './SvgCircle.module.css';

const SvgCircle = ({ hover, delay, easing, hoveredDuration, idleDuration }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const propsGreen = useSpring({
    to: {
      transform: !hover
        ? isMobile
          ? 'translate(40px, -40px)'
          : 'translate(82px, -122px)'
        : 'translate(0px, 0px)',
    },
    loop: false,
    delay: delay,
    config: {
      duration: !hover ? idleDuration : hoveredDuration,
      easing: easing,
    },
  });

  const propsBlue = useSpring({
    to: {
      transform: !hover
        ? isMobile
          ? 'translate(-40px, 40px)'
          : 'translate(-82px, 96px)'
        : 'translate(0px, 0px)',
    },
    loop: false,
    delay: delay,
    config: {
      duration: !hover ? 2000 : 1000,
      easing: easing,
    },
  });

  return (
    <div className={styles.animatedBGCircle}>
      <animated.div className={styles.animatedBGCircleBlock} style={propsGreen}>
        <img
          className={styles.animatedBGCircleEl}
          src={greenImg}
          alt='blured background green'
        />
      </animated.div>
      <animated.div className={styles.animatedBGCircleBlock} style={propsBlue}>
        <img
          className={styles.animatedBGCircleEl}
          src={blueImg}
          alt='blured background blue'
        />
      </animated.div>
    </div>
  );
};

export default SvgCircle;
