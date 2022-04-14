import padlock from '../../assets/images/padlock.svg';
import key from '../../assets/images/key.svg';
import anonMask from '../../assets/images/anon-mask.svg';
import shield from '../../assets/images/shield.svg';
import * as styles from '../../scenes/Homepage/components/Hero/Hero.module.css';

export default [
  { icon: padlock, iconClass: styles.padlock, alt: 'padlock' },
  { icon: key, iconClass: styles.key, alt: 'key' },
  { icon: anonMask, iconClass: styles.anonMask, alt: 'anon mask' },
  { icon: shield, iconClass: styles.shield, alt: 'shield' },
];
