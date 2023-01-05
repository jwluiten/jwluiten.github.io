import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Robust',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SunSDR2 DX transceivers are built with quality and robustness in mind and will meet
        the standards of even the most profound DX-er.
      </>
    ),
  },
  {
    title: 'Easy to operate',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ExpertSDR3 is feature rich, yet easy to operate. It will meet the demands of both the
        incidental user and the most demanding operator.
      </>
    ),
  },
  {
    title: 'Multi platform',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ExpertSDR3 software, the front end to the transceiver runs on Windows, MacOS and Linux.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
