export type AmlienceMeta = {
  deliveryId: string;
};

export type AmplienceAsset = {
  _meta: AmlienceMeta;
  id: string;
  name: string;
  endpoint: string;
  defaultHost: string;
};

export type AmplienceLink = {
  _meta: AmlienceMeta;
  title: string;
  url: string;
};

export type AmpliencePageComponent = {
  _meta: AmlienceMeta;
  title: string;
  description: string;
  image: AmplienceAsset;
  link:AmplienceLink;
  video: AmplienceAsset;
};

export type AmpliencePageBlock = {
  _meta: AmlienceMeta;
  title: string;
  type: string;
  components: AmpliencePageComponent[];
};

export type AmplienceHomePage = {
  _meta: AmlienceMeta;
  blocks: AmpliencePageBlock[];
};

export type AmpliencePageHeader = {
  _meta: AmlienceMeta;
  links: AmplienceLink[];
  logo: AmplienceAsset;
};
