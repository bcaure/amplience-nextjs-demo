import Image from 'next/image';
import { useAmplience } from '../services/useAmplience';
import styles from '../styles/Home.module.css';
import { AmplienceHomePage, AmpliencePageHeader } from '../types/amplience.types';
import { useEffect, useState } from 'react';
import DemoPageBlock from './pageblock';

const HOME_PAGE = '70562fdf-c393-495d-942f-3d80cc3fc775';

const HomePage = () => {
  const amplience = useAmplience();
  const [homepage, setHomepage] = useState<AmplienceHomePage | null>(null);

  useEffect(() => {
      if (amplience) {
        amplience.getContentItemById(HOME_PAGE)
          .then((obj) => setHomepage(obj.body as any as AmplienceHomePage));
      }
    }, [amplience]
  );

  const pageBlocks = homepage?.blocks.map(block => (
    <section key={block._meta.deliveryId} className="mb-5">
      <DemoPageBlock key={block._meta.deliveryId} amplienceBlock={block} />
    </section>
  ));

  return (
    <>
      { pageBlocks }
    </>
  );
};

export default HomePage;
