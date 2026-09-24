// Publisher identity for structured data (reference-site playbook, "Identity
// @ids"; the Law Tome's docs/ENTITY.md).
//
// The Person node is byte-identical across every Conyso property: conyso.com,
// the Law Tome and the Bias Atlas carry exactly these values. Change them only
// together with those sites, in the same round of commits. test/site.test.mjs
// pins the values.

export const FOUNDER = {
  name: 'Krishna Chagti',
  jobTitle: 'Founder & CEO',
  description: 'Founder of Conyso. Operator and independent researcher publishing on organizational scaling, signalling economics, and cybernetics.',
  url: 'https://conyso.com/founder/',
  sameAs: [
    'https://conyso.com/founder/',
    'https://www.linkedin.com/in/krishna-chagti',
    'https://github.com/krishnachagti-sudo',
    'https://orcid.org/0009-0003-6401-1788',
    'https://scholar.google.com/citations?user=PMzF_lYAAAAJ',
    'https://iitm.academia.edu/KrishnaChagti',
    'https://openalex.org/A5139032279',
    'https://peerlist.io/krishnachagti',
    'https://www.connectively.us/p/krishna-chagti-lssbb-psm-ii',
  ],
};

export const FOUNDER_ID = 'https://conyso.com/founder/#person';
export const CONYSO_ID = 'https://conyso.com/#organization';

export const founderNode = () => ({
  '@type': 'Person',
  '@id': FOUNDER_ID,
  ...FOUNDER,
  worksFor: { '@id': CONYSO_ID },
  founderOf: { '@id': CONYSO_ID },
});

export const conysoOrg = () => ({
  '@type': 'Organization',
  '@id': CONYSO_ID,
  name: 'Conyso',
  url: 'https://conyso.com',
  founder: { '@id': FOUNDER_ID },
});

/** This site as an organisation: <origin><base>#organization, parented by Conyso. */
export const siteOrgId = (cfg) => `${cfg.origin}${cfg.base}#organization`;
export const siteOrg = (cfg) => ({
  '@type': 'Organization',
  '@id': siteOrgId(cfg),
  name: cfg.brand,
  url: `${cfg.origin}${cfg.base}`,
  parentOrganization: { '@id': CONYSO_ID },
  founder: { '@id': FOUNDER_ID },
});
