import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Heading from '@theme/Heading';
import styles from './styles.module.css';

function AvatarComponent () {
  return (
    <div className="avatar avatar--vertical">
      <img
        className={clsx('avatar__photo',  styles['avatar__photo--xxl'])}
        src={require("@site/static/img/india-mirror.png").default} />
      <div className="avatar__intro">
        <div className={clsx('avatar__name', styles['avatar__name--pt'])}>Alejandro Varela de Cora</div>
        <small className={clsx('avatar__subtitle', styles.hideSubtitle)}>
            ♥ Q29uIGFtb3IgcGFyYSBtaSBtYWRyZSB5IG1pIGFidWVsYQ==
        </small>
      </div>
    </div>
  );
}

export default function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <header>
        <img 
          src={require("@site/static/img/teleco.jpg").default}
          alt="Facultade de Telecomunicaciones de la Universidad de Málaga"/>
      </header>
      <main  className={clsx('hero', styles.heroBanner)}>
        <div className={clsx('container', styles['container--tY'])}>
          <AvatarComponent />
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </main>
    </>
  );
}