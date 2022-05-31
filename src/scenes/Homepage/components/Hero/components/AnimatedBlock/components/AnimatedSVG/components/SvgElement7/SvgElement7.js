import React from 'react';
import { useSpring, animated } from 'react-spring';

const SvgElement7 = ({
  hover,
  delay,
  easing,
  hoveredDuration,
  idleDuration,
}) => {
  const props = useSpring({
    from: { transform: 'translate(40px, 80px)' },
    to: {
      transform: !hover ? 'translate(40px, 128px)' : 'translate(0px, 0px)',
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
        d='M410.553 534.715C387.422 534.709 368.592 527.879 355.407 516.259L320.025 547.539C320.296 547.778 320.569 548.015 320.843 548.251C335.017 560.433 353.801 568.695 376.268 571.76L366.843 597.132L349.573 643.621L370.094 643.627C393.633 643.633 417.626 640.233 441.337 633.913C448.575 631.984 455.784 629.783 462.944 627.325C485.339 619.637 507.243 609.436 528.034 597.16L548.468 585.094L533.726 555.263L513.292 567.329C505.951 571.663 498.443 575.679 490.811 579.348C480.775 584.174 470.522 588.399 460.148 591.96C454.309 593.965 448.432 595.759 442.531 597.332C441.172 597.694 439.811 598.045 438.449 598.383C427.427 601.125 416.33 603.09 405.264 604.199L431.074 534.72L410.553 534.715Z'
        fill='url(#paint6_linear_852_756)'
      />
      <path
        d='M546.922 629.831L567.357 617.766L548.468 585.094L528.034 597.16C507.243 609.436 485.339 619.637 462.944 627.325C455.784 629.783 448.575 631.984 441.337 633.913C417.626 640.233 393.633 643.633 370.094 643.627L349.573 643.621L368.461 676.293L388.983 676.298C412.522 676.305 436.514 672.905 460.226 666.585C467.463 664.656 474.673 662.455 481.832 659.997C504.227 652.309 526.132 642.107 546.922 629.831Z'
        fill='white'
      />
      <path
        d='M449.962 567.392L431.074 534.72L405.264 604.199C416.33 603.09 427.427 601.125 438.449 598.383L449.962 567.392Z'
        fill='white'
      />
      <path
        d='M376.268 571.76C353.801 568.695 335.017 560.433 320.843 548.251L320.536 548.422L338.914 580.211C346.807 587.166 356.172 592.884 366.843 597.132L376.268 571.76Z'
        fill='white'
      />
      <path
        d='M431.074 534.72L431.94 534.22L431.651 533.72L431.074 533.72L431.074 534.72ZM449.962 567.392L450.9 567.74L451.064 567.299L450.828 566.892L449.962 567.392ZM552.615 587.935L553.511 587.492L553.497 587.463L553.48 587.434L552.615 587.935ZM567.357 617.766L567.865 618.627L568.664 618.155L568.253 617.323L567.357 617.766ZM546.922 629.831L547.431 630.693L546.922 629.831ZM481.832 659.997L482.157 660.943L481.832 659.997ZM460.226 666.585L460.483 667.551L460.226 666.585ZM388.983 676.298L388.983 675.298L388.983 676.298ZM368.461 676.293L367.596 676.794L367.884 677.293L368.461 677.293L368.461 676.293ZM338.914 580.211L338.048 580.711L338.13 580.853L338.253 580.961L338.914 580.211ZM410.553 534.715L410.552 535.715L410.553 534.715ZM355.407 516.259L356.068 515.509L355.405 514.925L354.744 515.51L355.407 516.259ZM405.264 604.199L404.326 603.851L403.768 605.354L405.363 605.194L405.264 604.199ZM442.531 597.332L442.274 596.365H442.274L442.531 597.332ZM460.148 591.96L459.823 591.015H459.823L460.148 591.96ZM513.292 567.329L513.8 568.19L513.292 567.329ZM533.726 555.263L534.592 554.762L534.087 553.889L533.218 554.402L533.726 555.263ZM528.034 597.16L528.542 598.021L528.034 597.16ZM462.944 627.325L463.269 628.271L462.944 627.325ZM441.337 633.913L441.595 634.879L441.337 633.913ZM370.094 643.627L370.094 644.627L370.094 643.627ZM349.573 643.621L348.636 643.273L348.472 643.714L348.707 644.122L349.573 643.621ZM376.268 571.76L377.206 572.108L377.641 570.938L376.404 570.769L376.268 571.76ZM320.025 547.539L319.363 546.79L318.75 547.331L319.16 548.039L320.025 547.539ZM320.843 548.251L321.495 547.492L320.843 548.251ZM366.843 597.132L367.78 597.481L366.843 597.132ZM438.449 598.383L438.691 599.354L438.449 598.383ZM490.811 579.348L490.378 578.447L490.811 579.348ZM450.828 566.892L431.94 534.22L430.208 535.221L449.097 567.893L450.828 566.892ZM568.253 617.323L553.511 587.492L551.718 588.378L566.46 618.209L568.253 617.323ZM547.431 630.693L567.865 618.627L566.848 616.905L546.414 628.97L547.431 630.693ZM482.157 660.943C504.619 653.232 526.585 643.001 547.431 630.693L546.414 628.97C525.678 641.214 503.835 651.386 481.508 659.051L482.157 660.943ZM460.483 667.551C467.744 665.616 474.976 663.408 482.157 660.943L481.508 659.051C474.369 661.502 467.183 663.696 459.968 665.619L460.483 667.551ZM388.982 677.298C412.617 677.305 436.697 673.892 460.483 667.551L459.968 665.619C436.332 671.919 412.426 675.304 388.983 675.298L388.982 677.298ZM368.461 677.293L388.982 677.298L388.983 675.298L368.462 675.293L368.461 677.293ZM410.553 533.715C387.618 533.709 369.038 526.939 356.068 515.509L354.745 517.009C368.146 528.819 387.225 535.709 410.552 535.715L410.553 533.715ZM431.074 533.72L410.553 533.715L410.552 535.715L431.074 535.72L431.074 533.72ZM459.823 591.015C454.006 593.012 448.151 594.799 442.274 596.365L442.789 598.298C448.712 596.719 454.613 594.918 460.473 592.906L459.823 591.015ZM533.218 554.402L512.784 566.467L513.8 568.19L534.235 556.124L533.218 554.402ZM549.365 584.651L534.623 554.82L532.83 555.706L547.572 585.537L549.365 584.651ZM528.542 598.021L548.977 585.955L547.96 584.233L527.525 596.299L528.542 598.021ZM463.269 628.271C485.73 620.56 507.696 610.329 528.542 598.021L527.525 596.299C506.79 608.542 484.947 618.714 462.619 626.379L463.269 628.271ZM441.595 634.879C448.856 632.944 456.087 630.736 463.269 628.271L462.619 626.379C455.481 628.83 448.294 631.024 441.08 632.947L441.595 634.879ZM370.094 644.627C393.729 644.633 417.808 641.22 441.595 634.879L441.08 632.947C417.443 639.247 393.538 642.633 370.095 642.627L370.094 644.627ZM349.573 644.621L370.094 644.627L370.095 642.627L349.573 642.621L349.573 644.621ZM406.201 604.547L432.011 535.068L430.137 534.372L404.326 603.851L406.201 604.547ZM319.364 548.289C319.638 548.531 319.914 548.771 320.192 549.009L321.495 547.492C321.224 547.259 320.954 547.025 320.687 546.789L319.364 548.289ZM320.192 549.009C334.53 561.333 353.501 569.664 376.133 572.751L376.404 570.769C354.101 567.727 335.504 559.533 321.495 547.492L320.192 549.009ZM375.331 571.412L365.906 596.784L367.78 597.481L377.206 572.108L375.331 571.412ZM365.906 596.784L348.636 643.273L350.51 643.97L367.78 597.481L365.906 596.784ZM338.253 580.961C346.237 587.997 355.702 593.773 366.473 598.061L367.213 596.203C356.642 591.994 347.377 586.336 339.575 579.46L338.253 580.961ZM348.707 644.122L367.596 676.794L369.327 675.793L350.439 643.121L348.707 644.122ZM442.274 596.365C440.92 596.726 439.564 597.076 438.208 597.413L438.691 599.354C440.058 599.014 441.424 598.662 442.789 598.298L442.274 596.365ZM438.208 597.413C427.23 600.144 416.18 602.1 405.164 603.204L405.363 605.194C416.48 604.08 427.625 602.107 438.691 599.354L438.208 597.413ZM439.387 598.732L450.9 567.74L449.025 567.044L437.512 598.035L439.387 598.732ZM547.603 585.595L566.491 618.266L568.222 617.265L549.334 584.594L547.603 585.595ZM512.784 566.467C505.466 570.788 497.984 574.79 490.378 578.447L491.245 580.25C498.903 576.568 506.435 572.539 513.8 568.19L512.784 566.467ZM490.378 578.447C480.375 583.256 470.159 587.466 459.823 591.015L460.473 592.906C470.885 589.332 481.174 585.091 491.245 580.25L490.378 578.447ZM321.402 547.921L320.891 547.038L319.16 548.039L319.67 548.922L321.402 547.921ZM319.67 548.922L338.048 580.711L339.779 579.71L321.402 547.921L319.67 548.922ZM321.022 549.296L321.33 549.124L320.357 547.377L320.049 547.548L321.022 549.296ZM354.744 515.51L319.363 546.79L320.688 548.288L356.069 517.008L354.744 515.51ZM553.48 587.434L534.592 554.762L532.861 555.764L551.749 588.435L553.48 587.434Z'
        fill='#0F2830'
      />
    </animated.g>
  );
};

export default SvgElement7;
