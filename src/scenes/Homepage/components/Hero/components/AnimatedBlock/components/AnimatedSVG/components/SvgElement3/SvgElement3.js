import React from 'react';
import { useSpring, animated } from 'react-spring';

const SvgElement3 = ({
  hover,
  delay,
  easing,
  hoveredDuration,
  idleDuration,
}) => {
  const props = useSpring({
    from: { transform: 'translate(-72px, -56px)' },
    to: {
      transform: !hover ? 'translate(-72px, -8px)' : 'translate(0px, 0px)',
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
        d='M511.466 262.223C475.309 262.214 437.997 272.008 403.356 288.929L415.796 314.158C442.77 301.609 471.6 294.389 499.516 294.396C505.429 294.397 511.14 294.722 516.637 295.353C551.931 299.401 578.413 316.044 592.801 340.516C593.009 340.87 593.215 341.225 593.418 341.583C598.319 350.206 601.741 359.776 603.542 370.088L560.508 387.527C560.325 386.48 560.119 385.444 559.89 384.42C553.015 353.585 525.584 332.776 485.264 332.765C459.702 332.759 433.183 341.09 409.581 355.025L389.134 367.098L347.357 282.379L367.78 270.321C417.003 241.256 472.449 223.84 525.719 223.854C539.027 223.857 551.675 224.949 563.595 227.043L542.438 264.829C532.715 263.12 522.376 262.226 511.466 262.223Z'
        fill='url(#paint2_linear_852_756)'
      />
      <path
        d='M603.542 370.088L560.508 387.527L578.967 420.354L622.43 402.76L603.542 370.088Z'
        fill='white'
      />
      <path
        d='M409.581 355.025L389.134 367.098L407.467 399.354C447.967 373.854 515.394 344.223 559.89 384.42C553.015 353.585 525.584 332.776 485.264 332.765C459.702 332.759 433.183 341.09 409.581 355.025Z'
        fill='white'
      />
      <path
        d='M530.355 294.895C541.265 294.897 551.604 295.792 561.326 297.5L542.438 264.829C532.715 263.12 522.376 262.226 511.466 262.223C475.309 262.214 437.997 272.008 403.356 288.929L415.796 314.158C442.281 302.09 472.184 294.389 499.516 294.396C505.429 294.397 511.14 294.722 516.637 295.353C521.223 295.048 525.798 294.894 530.355 294.895Z'
        fill='white'
      />
      <path
        d='M561.326 297.5L582.484 259.715L563.595 227.043L542.438 264.829L561.326 297.5Z'
        fill='white'
      />
      <path
        d='M593.418 341.583C598.319 350.206 601.741 359.776 603.542 370.088L622.43 402.76C620.629 392.447 617.207 382.877 612.305 374.253L593.418 341.583Z'
        fill='white'
      />
      <path
        d='M415.796 314.158L414.9 314.6L415.328 315.47L416.211 315.068L415.796 314.158ZM530.355 294.895L530.355 293.895L530.355 294.895ZM561.326 297.5L561.153 298.485L561.852 298.608L562.199 297.989L561.326 297.5ZM582.484 259.715L583.356 260.203L583.634 259.707L583.349 259.214L582.484 259.715ZM622.43 402.76L622.805 403.687L623.554 403.384L623.415 402.588L622.43 402.76ZM403.356 288.929L402.917 288.031L402.015 288.471L402.459 289.372L403.356 288.929ZM511.466 262.223L511.467 261.223L511.466 262.223ZM563.595 227.043L564.461 226.542L564.228 226.139L563.768 226.058L563.595 227.043ZM525.719 223.854L525.719 224.854L525.719 223.854ZM367.78 270.321L367.271 269.459L367.78 270.321ZM347.357 282.379L346.849 281.518L346.05 281.989L346.461 282.821L347.357 282.379ZM389.134 367.098L388.237 367.541L388.25 367.567L388.265 367.592L389.134 367.098ZM409.581 355.025L409.072 354.164L409.581 355.025ZM485.264 332.765L485.264 331.765L485.264 332.765ZM560.508 387.527L559.522 387.699L559.552 387.868L559.636 388.017L560.508 387.527ZM499.516 294.396L499.516 295.396L499.516 294.396ZM592.801 340.516L593.663 340.009L592.801 340.516ZM612.305 374.253L613.175 373.759L613.171 373.753L612.305 374.253ZM407.467 399.354L406.597 399.848L407.114 400.757L408 400.2L407.467 399.354ZM578.967 420.354L578.095 420.844L578.526 421.611L579.342 421.28L578.967 420.354ZM530.354 295.895C541.21 295.897 551.491 296.788 561.153 298.485L561.499 296.515C551.716 294.797 541.319 293.897 530.355 293.895L530.354 295.895ZM562.199 297.989L583.356 260.203L581.611 259.226L560.454 297.012L562.199 297.989ZM403.795 289.828C438.324 272.962 475.486 263.214 511.466 263.223L511.467 261.223C475.132 261.214 437.671 271.055 402.917 288.031L403.795 289.828ZM511.466 263.223C522.322 263.226 532.603 264.116 542.265 265.814L542.611 263.844C532.828 262.125 522.431 261.226 511.467 261.223L511.466 263.223ZM543.31 265.317L564.468 227.532L562.723 226.554L541.565 264.34L543.31 265.317ZM563.768 226.058C551.788 223.953 539.082 222.857 525.719 222.854L525.719 224.854C538.972 224.857 551.563 225.944 563.422 228.028L563.768 226.058ZM525.719 222.854C472.238 222.84 416.619 240.322 367.271 269.459L368.288 271.182C417.388 242.19 472.66 224.84 525.719 224.854L525.719 222.854ZM367.271 269.459L346.849 281.518L347.866 283.24L368.288 271.182L367.271 269.459ZM389.643 367.959L410.089 355.887L409.072 354.164L388.626 366.237L389.643 367.959ZM410.089 355.887C433.567 342.024 459.913 333.759 485.263 333.765L485.264 331.765C459.492 331.759 432.798 340.155 409.072 354.164L410.089 355.887ZM560.883 388.454L603.917 371.015L603.166 369.161L560.132 386.6L560.883 388.454ZM499.517 293.396C471.432 293.389 442.458 300.652 415.375 313.251L416.218 315.064C443.083 302.567 471.769 295.389 499.516 295.396L499.517 293.396ZM416.693 313.715L404.253 288.487L402.459 289.372L414.9 314.6L416.693 313.715ZM346.461 282.821L388.237 367.541L390.031 366.656L348.254 281.937L346.461 282.821ZM583.349 259.214L564.461 226.542L562.73 227.543L581.618 260.215L583.349 259.214ZM541.572 265.329L560.461 298.001L562.192 297L543.304 264.328L541.572 265.329ZM623.415 402.588C621.595 392.166 618.136 382.486 613.175 373.759L611.436 374.747C616.279 383.267 619.663 392.728 621.445 402.932L623.415 402.588ZM593.663 340.009C579.091 315.224 552.304 298.438 516.751 294.359L516.523 296.346C551.559 300.365 577.735 316.865 591.939 341.022L593.663 340.009ZM516.751 294.359C511.214 293.724 505.465 293.397 499.517 293.396L499.516 295.396C505.392 295.397 511.065 295.72 516.523 296.346L516.751 294.359ZM516.703 296.351C521.267 296.047 525.82 295.894 530.354 295.895L530.355 293.895C525.775 293.893 521.178 294.049 516.57 294.355L516.703 296.351ZM602.676 370.589L621.564 403.26L623.296 402.259L604.408 369.588L602.676 370.589ZM485.263 333.765C525.219 333.775 552.162 354.354 558.914 384.637L560.866 384.202C553.868 352.817 525.95 331.776 485.264 331.765L485.263 333.765ZM558.914 384.637C559.14 385.647 559.342 386.668 559.522 387.699L561.493 387.355C561.307 386.293 561.098 385.242 560.866 384.202L558.914 384.637ZM408.336 398.859L390.004 366.604L388.265 367.592L406.597 399.848L408.336 398.859ZM559.636 388.017L578.095 420.844L579.838 419.863L561.379 387.037L559.636 388.017ZM416.211 315.068C442.597 303.046 472.357 295.389 499.516 295.396L499.517 293.396C472.011 293.389 441.966 301.135 415.382 313.248L416.211 315.068ZM592.549 342.077C597.391 350.597 600.775 360.057 602.557 370.26L604.527 369.916C602.707 359.495 599.248 349.816 594.287 341.089L592.549 342.077ZM613.171 373.753L594.284 341.082L592.552 342.083L611.44 374.754L613.171 373.753ZM591.935 341.016L592.552 342.083L594.284 341.082L593.667 340.015L591.935 341.016ZM594.287 341.089C594.082 340.727 593.874 340.367 593.663 340.009L591.939 341.022C592.145 341.372 592.348 341.724 592.549 342.077L594.287 341.089ZM622.055 401.833L578.592 419.427L579.342 421.28L622.805 403.687L622.055 401.833ZM560.561 383.678C537.994 363.291 509.644 360.663 481.981 366.27C454.331 371.875 427.231 385.727 406.934 398.507L408 400.2C428.202 387.48 455.066 373.767 482.379 368.23C509.679 362.696 537.291 365.351 559.22 385.162L560.561 383.678Z'
        fill='#0F2830'
      />
    </animated.g>
  );
};

export default SvgElement3;
