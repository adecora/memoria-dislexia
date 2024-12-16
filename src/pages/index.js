import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Memoria trabajo fin de grado proyecto dislexia">
      <HomepageHeader />
    </Layout>
  );
}
