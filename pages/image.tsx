import Image from 'react-bootstrap/Image'
import { AmplienceAsset } from '../types/amplience.types';
const DemoImage = ({image, height}:{image: AmplienceAsset, height?: string}) =>
    !!height ? <Image src={`https://${image.defaultHost}/i/${image.endpoint}/${image.name}`} alt={image.name} height={height} /> :
    <Image src={`https://${image.defaultHost}/i/${image.endpoint}/${image.name}`} alt={image.name} fluid className="w-100" />;

export default DemoImage;
