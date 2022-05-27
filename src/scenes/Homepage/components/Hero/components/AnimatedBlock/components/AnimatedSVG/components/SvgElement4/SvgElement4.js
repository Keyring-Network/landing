import React from 'react';
import { useSpring, animated, easings } from 'react-spring';

const SvgElement4 = ({ hover, delay, easing }) => {
  const props = useSpring({
    from: { transform: 'translate(-24px, 20px)' },
    to: {
      transform: !hover ? 'translate(-24px, 52px)' : 'translate(0px, 0px)',
    },
    loop: !hover ? { reverse: true } : false,
    delay: delay,
    config: {
      duration: !hover ? 1800 : 1000,
      easing: easing,
    },
  });

  return (
    <animated.g style={props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M472.865 366C448.679 365.994 423.153 377.011 403.608 393.972C393.377 402.85 384.785 413.356 378.882 424.762C378.458 425.58 378.049 426.403 377.653 427.23C376.58 429.476 375.61 431.755 374.754 434.061C373.952 436.22 373.266 438.356 372.693 440.464C368.66 455.311 370.24 468.775 376.354 479.31C379.553 484.821 383.993 489.531 389.52 493.217C398.046 498.904 409.157 502.155 422.286 502.159C455.379 502.167 490.981 481.538 510.339 453.282L545.725 453.291L574.692 473.84C580.858 465.361 585.981 456.515 590.186 447.596C592.302 443.109 594.185 438.604 595.851 434.117C598.266 427.617 600.165 421.212 601.567 414.932L533.751 414.915L524.592 414.913C525.093 406.248 523.536 398.299 520.18 391.441C519.337 389.719 518.381 388.064 517.315 386.485C511.095 377.269 501.151 370.601 488.31 367.666C483.546 366.577 478.384 366.001 472.865 366ZM458.612 404.369C441.06 404.365 421.891 417.663 415.796 434.071C409.771 450.292 418.777 463.48 435.939 463.784C436.052 463.786 436.165 463.787 436.279 463.788C436.365 463.789 436.452 463.789 436.539 463.789C452.98 463.794 470.84 452.126 478.044 437.163C478.531 436.152 478.969 435.126 479.355 434.087C485.45 417.679 476.163 404.374 458.612 404.369Z'
        fill='url(#paint3_linear_852_756)'
      />
      <path
        d='M529.227 485.954L564.614 485.963L545.725 453.291L510.339 453.282L529.227 485.954Z'
        fill='white'
      />
      <path
        d='M564.614 485.963L593.58 506.511L574.692 473.84L545.725 453.291L564.614 485.963Z'
        fill='white'
      />
      <path
        d='M614.74 466.789C617.154 460.289 619.054 453.884 620.455 447.604L601.567 414.932C600.165 421.212 598.266 427.617 595.851 434.117C594.185 438.604 592.302 443.109 590.186 447.596C585.981 456.515 580.858 465.361 574.692 473.84L593.58 506.511C602.849 493.768 609.761 480.193 614.74 466.789Z'
        fill='white'
      />
      <path
        d='M524.592 414.913L533.751 414.915L520.18 391.441C523.536 398.299 525.093 406.248 524.592 414.913Z'
        fill='white'
      />
      <path
        d='M458.612 404.369C441.06 404.365 421.891 417.663 415.796 434.071C409.771 450.292 418.777 463.48 435.939 463.784C443.021 448.945 461.7 437.432 478.044 437.163C478.531 436.152 478.969 435.126 479.355 434.087C485.45 417.679 476.163 404.374 458.612 404.369Z'
        fill='white'
      />
      <path
        d='M510.339 453.282C490.981 481.538 455.379 502.167 422.286 502.159C409.157 502.155 398.046 498.904 389.52 493.217C383.993 489.531 379.553 484.821 376.354 479.31L395.169 511.854L395.245 511.986C403.38 525.997 419.536 534.825 441.175 534.831C450.156 534.833 459.322 533.315 468.298 530.537C481.341 525.525 511.257 510.329 526.576 489.642C527.49 488.428 528.374 487.198 529.227 485.954L510.339 453.282Z'
        fill='white'
      />
      <path
        d='M614.74 466.789L615.677 467.137L614.74 466.789ZM441.175 534.831L441.175 533.831L441.175 534.831ZM620.455 447.604L621.431 447.822L621.516 447.441L621.321 447.104L620.455 447.604ZM593.58 506.511L593.002 507.327L593.808 507.899L594.389 507.1L593.58 506.511ZM415.796 434.071L414.859 433.723V433.723L415.796 434.071ZM458.612 404.369L458.612 403.369L458.612 404.369ZM436.539 463.789L436.539 464.789H436.539L436.539 463.789ZM479.355 434.087L480.292 434.436L479.355 434.087ZM472.865 366L472.864 367L472.865 366ZM374.754 434.061L373.817 433.712L374.754 434.061ZM524.592 414.913L523.593 414.855L523.532 415.912L524.591 415.913L524.592 414.913ZM595.851 434.117L596.789 434.466L595.851 434.117ZM545.725 453.291L546.304 452.475L546.044 452.291L545.726 452.291L545.725 453.291ZM510.339 453.282L510.339 452.282L509.812 452.282L509.514 452.717L510.339 453.282ZM422.286 502.159L422.286 503.159L422.286 502.159ZM601.567 414.932L602.432 414.432L602.144 413.932L601.567 413.932L601.567 414.932ZM403.608 393.972L402.952 393.217L403.608 393.972ZM488.31 367.666L488.533 366.691L488.31 367.666ZM590.186 447.596L589.282 447.17L590.186 447.596ZM517.315 386.485L518.144 385.926L517.315 386.485ZM533.751 414.915L533.751 415.915L533.751 414.915ZM394.889 513.368C395.166 513.846 395.777 514.01 396.255 513.733C396.733 513.457 396.897 512.845 396.621 512.367L394.889 513.368ZM395.169 511.854L396.035 511.354L396.035 511.354L395.169 511.854ZM389.52 493.217L388.965 494.049L389.52 493.217ZM435.939 463.784L435.921 464.784H435.921L435.939 463.784ZM526.576 489.642L525.777 489.041L525.773 489.047L526.576 489.642ZM468.298 530.537L468.593 531.493L468.625 531.483L468.656 531.471L468.298 530.537ZM378.882 424.762L377.994 424.303L378.882 424.762ZM377.653 427.23L378.556 427.661L377.653 427.23ZM372.693 440.464L371.728 440.201L372.693 440.464ZM478.044 437.163L478.945 437.597L478.044 437.163ZM436.279 463.788L436.287 462.788H436.287L436.279 463.788ZM529.227 486.954L564.613 486.963L564.614 484.963L529.227 484.954L529.227 486.954ZM615.677 467.137C618.107 460.597 620.019 454.148 621.431 447.822L619.479 447.386C618.088 453.62 616.202 459.982 613.802 466.441L615.677 467.137ZM594.159 505.696L565.192 485.147L564.035 486.778L593.002 507.327L594.159 505.696ZM594.389 507.1C603.717 494.274 610.67 480.617 615.677 467.137L613.802 466.441C608.851 479.769 601.981 493.261 592.772 505.923L594.389 507.1ZM416.733 434.419C419.696 426.443 425.862 419.17 433.478 413.887C441.093 408.604 450.078 405.367 458.611 405.369L458.612 403.369C449.594 403.367 440.219 406.777 432.338 412.244C424.457 417.711 417.991 425.291 414.859 433.723L416.733 434.419ZM458.611 405.369C467.133 405.372 473.502 408.594 477.031 413.649C480.559 418.704 481.376 425.775 478.417 433.739L480.292 434.436C483.429 425.992 482.65 418.206 478.671 412.505C474.692 406.804 467.641 403.372 458.612 403.369L458.611 405.369ZM510.339 454.282L545.725 454.291L545.726 452.291L510.339 452.282L510.339 454.282ZM422.286 503.159C455.748 503.167 491.643 482.341 511.164 453.847L509.514 452.717C490.319 480.735 455.009 501.167 422.286 501.159L422.286 503.159ZM596.789 434.466C599.218 427.925 601.131 421.476 602.543 415.15L600.591 414.714C599.2 420.948 597.313 427.31 594.914 433.769L596.789 434.466ZM575.271 473.024L546.304 452.475L545.147 454.107L574.113 474.655L575.271 473.024ZM472.865 365C448.394 364.994 422.643 376.13 402.952 393.217L404.263 394.727C423.664 377.892 448.965 366.994 472.864 367L472.865 365ZM488.533 366.691C483.691 365.584 478.453 365.001 472.865 365L472.864 367C478.314 367.001 483.402 367.57 488.087 368.641L488.533 366.691ZM621.321 447.104L602.432 414.432L600.701 415.433L619.589 448.105L621.321 447.104ZM575.501 474.428C581.707 465.895 586.861 456.994 591.091 448.023L589.282 447.17C585.102 456.036 580.01 464.828 573.883 473.251L575.501 474.428ZM591.091 448.023C593.219 443.509 595.113 438.978 596.789 434.466L594.914 433.769C593.257 438.23 591.385 442.709 589.282 447.17L591.091 448.023ZM573.826 474.34L592.715 507.012L594.446 506.011L575.558 473.339L573.826 474.34ZM565.479 485.462L546.591 452.79L544.86 453.791L563.748 486.463L565.479 485.462ZM518.144 385.926C511.765 376.474 501.591 369.676 488.533 366.691L488.087 368.641C500.712 371.527 510.425 378.063 516.486 387.045L518.144 385.926ZM390.075 492.385C384.672 488.781 380.339 484.183 377.219 478.808L375.489 479.812C378.767 485.459 383.315 490.28 388.965 494.049L390.075 492.385ZM375.489 479.81L394.304 512.355L396.035 511.354L377.22 478.809L375.489 479.81ZM388.965 494.049C397.681 499.862 408.993 503.155 422.286 503.159L422.286 501.159C409.321 501.155 398.41 497.945 390.075 492.385L388.965 494.049ZM435.957 462.784C427.631 462.636 421.424 459.375 417.999 454.334C414.574 449.293 413.809 442.293 416.733 434.419L414.859 433.723C411.758 442.07 412.483 449.774 416.345 455.458C420.208 461.143 427.085 464.627 435.921 464.784L435.957 462.784ZM530.093 485.453L511.205 452.781L509.473 453.782L528.361 486.454L530.093 485.453ZM527.375 490.244C528.298 489.018 529.191 487.776 530.052 486.519L528.402 485.389C527.558 486.621 526.683 487.838 525.777 489.041L527.375 490.244ZM441.174 535.831C450.267 535.833 459.533 534.296 468.593 531.493L468.002 529.582C459.11 532.334 450.044 533.833 441.175 533.831L441.174 535.831ZM402.952 393.217C392.639 402.166 383.963 412.77 377.994 424.303L379.77 425.222C385.608 413.942 394.116 403.533 404.263 394.727L402.952 393.217ZM377.994 424.303C377.565 425.13 377.151 425.962 376.751 426.798L378.556 427.661C378.946 426.844 379.351 426.031 379.77 425.222L377.994 424.303ZM376.751 426.798C375.665 429.071 374.684 431.378 373.817 433.712L375.691 434.409C376.537 432.133 377.494 429.881 378.556 427.661L376.751 426.798ZM373.817 433.712C373.004 435.899 372.309 438.064 371.728 440.201L373.658 440.726C374.223 438.648 374.899 436.541 375.691 434.409L373.817 433.712ZM371.728 440.201C367.637 455.263 369.22 469.009 375.489 479.812L377.219 478.808C371.26 468.541 369.683 455.359 373.658 440.726L371.728 440.201ZM394.304 512.355L394.379 512.486L396.111 511.485L396.035 511.354L394.304 512.355ZM394.38 512.488C402.731 526.872 419.261 535.825 441.174 535.831L441.175 533.831C419.811 533.825 404.028 525.122 396.11 511.484L394.38 512.488ZM394.303 512.353C394.328 512.398 394.354 512.443 394.38 512.488L396.11 511.484C396.085 511.441 396.061 511.398 396.036 511.356L394.303 512.353ZM394.379 512.486L394.889 513.368L396.621 512.367L396.111 511.485L394.379 512.486ZM534.617 414.414L521.046 390.941L519.315 391.942L532.885 415.415L534.617 414.414ZM519.282 391.881C522.555 398.571 524.086 406.346 523.593 414.855L525.59 414.97C526.101 406.149 524.516 398.027 521.079 391.002L519.282 391.881ZM516.449 386.986L519.315 391.942L521.046 390.941L518.181 385.985L516.449 386.986ZM521.079 391.002C520.215 389.238 519.236 387.544 518.144 385.926L516.486 387.045C517.526 388.585 518.459 390.199 519.282 391.881L521.079 391.002ZM436.539 464.789C453.382 464.794 471.582 452.889 478.945 437.597L477.143 436.729C470.097 451.363 452.577 462.793 436.539 462.789L436.539 464.789ZM478.028 436.163C469.64 436.301 460.708 439.318 452.987 444.163C445.266 449.007 438.676 455.727 435.037 463.353L436.842 464.215C440.284 457.002 446.575 450.546 454.05 445.857C461.524 441.168 470.104 438.294 478.061 438.163L478.028 436.163ZM435.921 464.784C436.038 464.786 436.154 464.787 436.271 464.788L436.287 462.788C436.176 462.787 436.066 462.786 435.957 462.784L435.921 464.784ZM436.271 464.788C436.36 464.789 436.449 464.789 436.539 464.789L436.539 462.789C436.455 462.789 436.371 462.789 436.287 462.788L436.271 464.788ZM478.417 433.739C478.043 434.748 477.617 435.745 477.143 436.729L478.945 437.597C479.445 436.559 479.895 435.504 480.292 434.436L478.417 433.739ZM533.751 413.915L524.592 413.913L524.591 415.913L533.751 415.915L533.751 413.915ZM468.656 531.471C475.239 528.941 486.039 523.859 497.12 516.811C508.193 509.769 519.617 500.72 527.38 490.237L525.773 489.047C518.216 499.25 507.022 508.143 496.047 515.124C485.079 522.099 474.399 527.121 467.939 529.604L468.656 531.471ZM601.567 413.932L533.751 413.915L533.751 415.915L601.566 415.932L601.567 413.932Z'
        fill='#0F2830'
      />
    </animated.g>
  );
};

export default SvgElement4;
