import { useAmplience } from '../services/useAmplience';
import { AmplienceHomePage, AmpliencePageHeader } from '../types/amplience.types';
import { useEffect, useMemo, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DemoImage from './image';

const HEADER_PAGE = 'bb8278ba-4b31-4eba-a28c-d5b8f814550e';

const AVATAR_URL = 'https://cdns.gigya.com/photos/275694508450/60c30b8d73ac4737be41cfa046b88028/orig?ts=637707278666588107';


const DemoHeader = () => {
  const amplience = useAmplience();
  const [ampliencePageHeader, setAmpliencePageHeader] = useState<AmpliencePageHeader | null>(null);

  useEffect(() => {
    if (amplience) {
      amplience.getContentItemById(HEADER_PAGE)
        .then((obj) => setAmpliencePageHeader(obj.body as any as AmpliencePageHeader));
    }
  }, [amplience]
  );

  const navItems = useMemo(() => ampliencePageHeader?.links
      ?.map(link => (
        <Nav.Item key={link._meta.deliveryId} className="d-flex align-items-center">
          <Nav.Link href={link.url} style={{color: 'white'}}>
            <h3>{link.title}</h3>
          </Nav.Link>
        </Nav.Item>
      )), [ampliencePageHeader]
  );

  return (
    <header className="d-block w-100 mx-3 mt-3">
      <Container fluid>
        <Row>
          {
            ampliencePageHeader?.logo &&
              <Col xs={4}><DemoImage image={ampliencePageHeader?.logo} height={'100px'} /></Col>
          }
          <Col className="d-flex">
            <Nav onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
              {navItems}
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default DemoHeader;
