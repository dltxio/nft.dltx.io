import { default as Zero } from "./0.json";
import { default as One } from "./1.json";
import { default as Two } from "./2.json";
import { default as Three } from "./3.json";
import { default as Four } from "./4.json";
import { default as Five } from "./5.json";
import { default as Six } from "./6.json";
import { default as Nine } from "./9.json";
// add more mesh members as their JSON data is recorded for the Meshie NFT's
import { default as Additional } from "./additional.json";

export type AdditionalMetadataEntry = {
  name: string;
  github: string;
  ens?: string;
  nfts?: {
    // highlighted NFT's to be added in later ticket
    name: string;
    url: string;
  }[];
};

export const ADDITIONAL_METADATA: AdditionalMetadataEntry[] = Additional;

export type MetadataEntry = {
  description: string;
  image: string;
  name: string;
  attributes: {
    twitter?: string;
    email?: string;
    pgp?: string;
  }[];
};

const METADATA: MetadataEntry[] = [
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Nine
];

export default METADATA;
