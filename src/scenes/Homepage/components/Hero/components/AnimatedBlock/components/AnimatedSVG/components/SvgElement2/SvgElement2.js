import React from 'react';
import { useSpring, animated } from 'react-spring';

const SvgElement2 = ({
  hover,
  delay,
  easing,
  hoveredDuration,
  idleDuration,
}) => {
  const props = useSpring({
    from: { transform: 'translate(-80px, 18px)' },
    to: {
      transform: !hover ? 'translate(-80px, 44px)' : 'translate(0px, 0px)',
    },
    loop: !hover ? { reverse: true } : false,
    delay: delay,
    config: {
      duration: !hover ? idleDuration : hoveredDuration,
      easing: easing,
    },
  });

  return (
    <animated.g style={props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M341.002 433.905C345.998 420.455 353.569 407.671 363.004 396.004L330.406 381.478C317.308 397.672 306.837 415.382 299.96 433.894C288.374 465.084 288.706 493.921 298.72 517.097L340.094 494.059C332.853 477.3 332.609 456.499 341.002 433.905Z'
        fill='url(#paint1_linear_852_756)'
      />
      <path
        d='M340.094 494.059L298.72 517.097L317.593 549.777L358.967 526.739L340.094 494.059Z'
        fill='white'
      />
      <path
        d='M363.004 396.004C353.569 407.671 345.998 420.455 341.002 433.905C332.609 456.499 332.853 477.3 340.094 494.059L358.967 526.739C351.726 509.98 351.482 489.179 359.875 466.584C364.871 453.135 372.442 440.35 381.877 428.684L363.004 396.004Z'
        fill='white'
      />
      <path
        d='M341.002 433.905L341.939 434.253L341.002 433.905ZM363.004 396.004L363.87 395.504L363.708 395.223L363.411 395.091L363.004 396.004ZM298.72 517.097L297.802 517.494L297.825 517.547L297.854 517.597L298.72 517.097ZM299.96 433.894L299.022 433.546L299.96 433.894ZM330.406 381.478L330.813 380.564L330.111 380.251L329.628 380.849L330.406 381.478ZM359.875 466.584L360.812 466.933L359.875 466.584ZM381.877 428.684L382.655 429.313L383.087 428.779L382.743 428.184L381.877 428.684ZM358.967 526.739L359.454 527.612L360.244 527.172L359.885 526.342L358.967 526.739ZM317.593 549.777L316.727 550.277L317.219 551.13L318.079 550.651L317.593 549.777ZM341.939 434.253C346.893 420.918 354.406 408.226 363.782 396.633L362.227 395.376C352.732 407.115 345.103 419.993 340.064 433.557L341.939 434.253ZM341.012 493.662C333.892 477.184 333.618 456.654 341.939 434.253L340.064 433.557C331.599 456.345 331.814 477.417 339.176 494.455L341.012 493.662ZM299.206 517.971L340.581 494.933L339.608 493.185L298.233 516.224L299.206 517.971ZM299.022 433.546C287.365 464.929 287.667 494.038 297.802 517.494L299.638 516.701C289.745 493.804 289.383 465.239 300.897 434.242L299.022 433.546ZM329.628 380.849C316.472 397.116 305.942 414.919 299.022 433.546L300.897 434.242C307.732 415.844 318.145 398.228 331.183 382.106L329.628 380.849ZM363.411 395.091L330.813 380.564L329.999 382.391L362.597 396.918L363.411 395.091ZM360.812 466.933C365.766 453.598 373.279 440.906 382.655 429.313L381.1 428.055C371.605 439.795 363.976 452.673 358.937 466.236L360.812 466.933ZM359.885 526.342C352.765 509.863 352.491 489.334 360.812 466.933L358.937 466.236C350.472 489.024 350.688 510.097 358.049 527.135L359.885 526.342ZM318.079 550.651L359.454 527.612L358.481 525.865L317.106 548.903L318.079 550.651ZM362.138 396.504L381.011 429.184L382.743 428.184L363.87 395.504L362.138 396.504ZM339.228 494.559L358.101 527.239L359.833 526.238L340.96 493.559L339.228 494.559ZM297.854 517.597L316.727 550.277L318.459 549.277L299.586 516.597L297.854 517.597Z'
        fill='#0F2830'
      />
    </animated.g>
  );
};

export default SvgElement2;