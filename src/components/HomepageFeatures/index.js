import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; // Assuming you have a styles.module.css or similar CSS module for styling

const FeatureList = [
  {
    title: 'Strategic SEO',
    icon: '📈', 
    description: (
      <>
        Gain organic visibility and become the first choice for customers searching for your services in Chicago and surrounding areas. We build long-term online authority.
      </>
    ),
  },
  {
    title: 'Targeted Google Ads',
    icon: '💰', 
    description: (
      <>
        Capture high-intent leads immediately. Our Google Ads experts craft campaigns that put your business directly in front of local customers ready to buy.
      </>
    ),
  },
  {
    title: 'Professional Business Websites',
    icon: '💻', 
    description: (
      <>
        Your digital storefront built for success. We design responsive, intuitive, and visually appealing websites that convert visitors into loyal Chicagoland customers.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span style={{ fontSize: '80px' }} className={styles.featureIcon}>{icon}</span> 
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
