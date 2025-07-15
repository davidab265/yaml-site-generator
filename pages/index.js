import { useState } from 'react';
import Layout from '../components/Layout';
import AppBox from '../components/AppBox';
import { getConfig } from '../utils/config';

export default function Home({ serverConfig }) {
  const [config, setConfig] = useState(serverConfig);
  
  // Determine the number of columns based on config or default to 3
  const columnsConfig = config.columns || 3;
  const gridColumns = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };
  
  const gridClass = gridColumns[columnsConfig] || gridColumns[3];

  return (
    <Layout title={config.title} description={config.subtitle}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {config.titleHtml ? (
            <span dangerouslySetInnerHTML={{ __html: config.titleHtml }} />
          ) : (
            <>
              <span className="text-light-a0">Get</span>
              <span className="text-primary-light">App</span>
            </>
          )}
        </h1>
        <p className="text-xl text-tonal-500">{config.subtitle}</p>
      </div>

      <div className={`grid ${gridClass} gap-8`}>
        {config.boxes.map((box, index) => (
          <AppBox
            key={index}
            logo={box.logo}
            title={box.title}
            description={box.description}
            link={box.link}
            customClass={box.customClass || ''}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const config = getConfig();
  
  return {
    props: {
      serverConfig: config
    }
  };
}
