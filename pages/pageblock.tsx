import { AmpliencePageBlock } from '../types/amplience.types';
import Carousel from 'react-bootstrap/Carousel';
import DemoImage from './image';
import DemoVideo from './video';

type ItemClickedFunction = (index: number) => void;
type BlockProps = { amplienceBlock: AmpliencePageBlock };

const CarouselBlock = ({amplienceBlock}: BlockProps) => {
  const items = amplienceBlock.components.map(component => (
    <Carousel.Item key={component._meta.deliveryId} style={{ maxHeight: '60vh' }}>
        <DemoImage image={component.image} />
        { 
          component.title && 
          <Carousel.Caption>
            <h3>{component.title}</h3>
            { 
              component.description && 
              <p>{component.description}</p>
            }
          </Carousel.Caption>
        }
    </Carousel.Item>
  ));
  return (
    <Carousel>
      {items}
    </Carousel>
  );
};
const BuyBlock = ({ amplienceBlock }: BlockProps) => {
  return <div></div>;
};
const HeroBlock = ({ amplienceBlock }: BlockProps) => {
  const component = amplienceBlock.components[0];
  return (
    <div style={{maxHeight: `80vh`, overflowY: 'hidden'}}>
      <div className="d-block w-100">
        {
          component.image &&
            <DemoImage image={component.image} />
        }
        {
          component.video &&
            <DemoVideo video={component.video} />
        }
      </div>
      <div>
        <h3>{component.title}</h3>
        <span>{component.description}</span>
      </div>
    </div>
  );
};
const CardsBlock = ({ amplienceBlock }: BlockProps) => {
  return <div></div>;
};

const DemoPageBlock = ({ amplienceBlock }: BlockProps) => {
  switch(amplienceBlock.type) {
    case 'carousel':
      return <CarouselBlock amplienceBlock={amplienceBlock} />;
    case 'buy':
      return <BuyBlock amplienceBlock={amplienceBlock} />;
    case 'cards':
      return <CardsBlock amplienceBlock={amplienceBlock} />;
    case 'hero':
      return <HeroBlock amplienceBlock={amplienceBlock} />;
    default:
      return <div>`Unknown block type ${amplienceBlock.type}`</div>;
  }
};

export default DemoPageBlock;
