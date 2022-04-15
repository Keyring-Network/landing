import React from 'react';
import classNames from 'classnames/bind';
import * as content from '../../../../../../constants/content/faq';

const AddonsMobile = ({defaultStyles, downloadIcon, discordIcon}) => (
  <div className={defaultStyles.faqAddonsMobile}>
    <h3 className={defaultStyles.faqAddon}>{content.FAQ_ADDON}</h3>
    <a
      href={content.READ_DOCS}
      className={classNames("link_colored", defaultStyles.link)}
      target="_blank"
      rel="noreferrer"
    >
      <img src={downloadIcon} alt="download" loading="lazy" />
      {content.DOWNLOAD_DOCS}
    </a>
    <br />
    <a
      href={content.LINK_DISCORD}
      className={classNames("link_colored", defaultStyles.link)}
      target="_blank"
      rel="noreferrer"
    >
      <img src={discordIcon} alt="discord" loading="lazy" />
      {content.ASK_DISCORD}
    </a>
  </div>
)

export default AddonsMobile;
