import React from 'react';
import { useSpring, animated } from 'react-spring';

const SvgElement5 = ({
  hover,
  delay,
  easing,
  hoveredDuration,
  idleDuration,
}) => {
  const props = useSpring({
    from: { transform: 'translate(144px, 12px)' },
    to: {
      transform: !hover ? 'translate(144px, 38px)' : 'translate(0px, 0px)',
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
        d='M521.384 485.295C505.906 500.605 487.158 513.277 467.213 521.876L474.484 555.509C502.053 543.623 527.923 526.135 549.301 504.988L521.384 485.295Z'
        fill='url(#paint4_linear_852_756)'
      />
      <path
        d='M549.301 504.988C527.923 526.135 502.053 543.623 474.484 555.509L493.373 588.153C520.941 576.268 546.812 558.78 568.19 537.633L549.301 504.988Z'
        fill='white'
      />
      <path
        d='M474.484 555.509L473.507 555.72L473.54 555.874L473.619 556.01L474.484 555.509ZM521.384 485.295L521.96 484.478L521.276 483.995L520.681 484.584L521.384 485.295ZM467.213 521.876L466.817 520.957L466.062 521.283L466.235 522.087L467.213 521.876ZM549.301 504.988L550.167 504.487L550.057 504.297L549.878 504.171L549.301 504.988ZM493.373 588.153L492.508 588.654L492.953 589.424L493.769 589.072L493.373 588.153ZM568.19 537.633L568.893 538.344L569.442 537.8L569.055 537.132L568.19 537.633ZM520.681 484.584C505.291 499.807 486.647 512.408 466.817 520.957L467.609 522.794C487.67 514.145 506.521 501.403 522.087 486.006L520.681 484.584ZM474.88 556.427C502.564 544.492 528.538 526.933 550.004 505.699L548.598 504.277C527.308 525.337 501.542 542.755 474.088 554.59L474.88 556.427ZM466.235 522.087L473.507 555.72L475.462 555.297L468.19 521.664L466.235 522.087ZM549.878 504.171L521.96 484.478L520.807 486.112L548.725 505.805L549.878 504.171ZM493.769 589.072C521.452 577.136 547.427 559.578 568.893 538.344L567.487 536.922C546.197 557.982 520.43 575.399 492.977 587.235L493.769 589.072ZM548.436 505.489L567.324 538.134L569.055 537.132L550.167 504.487L548.436 505.489ZM473.619 556.01L492.508 588.654L494.239 587.652L475.35 555.008L473.619 556.01Z'
        fill='#0F2830'
      />
    </animated.g>
  );
};

export default SvgElement5;