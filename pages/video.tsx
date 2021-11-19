import { AmplienceAsset } from '../types/amplience.types';
const DemoVideo = ({video}:{video: AmplienceAsset}) =>
    // eslint-disable-next-line @next/next/no-img-element
    <video width="100%" autoPlay loop>
      <source src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_720p`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>;
export default DemoVideo;
