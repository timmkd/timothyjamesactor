import { type SchemaTypeDefinition } from 'sanity';
import credit from '../../schemas/credit';
import headshot from '../../schemas/headshot';
import video from '../../schemas/video';
import about from '../../schemas/about';
import link from '../../schemas/link';
import attribute from '../../schemas/attribute';
import skill from '../../schemas/skill';
import imageAsset from '../../schemas/image';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [credit, headshot, video, about, link, attribute, skill, imageAsset],
};
