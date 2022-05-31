import React, { memo, useEffect, useState } from 'react';

import * as styles from './AnimatedBlock.module.css';
import AnimatedSVG from './components/AnimatedSVG';

const MemoSVG = memo(AnimatedSVG);

const AnimatedBlock = ({ isMobile = false }) => {
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    let timer;
    if (isMobile) {
      timer = setTimeout(() => {
        handleStopAnimation();
      }, 2500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isHover]);

  const handleStartAnimation = () => {
    setHover(true);
  };

  const handleStopAnimation = () => {
    setHover(false);
  };

  const toggleAnimation = () => {
    setHover((prev) => !prev);
  };

  return (
    <div className={styles.heroAnimatedContainer}>
      <MemoSVG hover={isHover} />

      <div className={styles.svgAnimationTrigger}>
        {!isMobile ? (
          <div
            className={styles.svgAnimationTriggerCircle}
            onMouseEnter={handleStartAnimation}
            onMouseLeave={handleStopAnimation}
          />
        ) : (
          <div
            className={styles.svgAnimationTriggerCircle}
            onClick={toggleAnimation}
          />
        )}
      </div>
    </div>
  );
};

export default AnimatedBlock;
