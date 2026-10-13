const config = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'steed.galvez@gmail.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '54649404',
  phoneDisplay: import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '5464-9404',
  countryCode: import.meta.env.VITE_CONTACT_COUNTRY_CODE || '502',
  businessName: import.meta.env.VITE_BUSINESS_NAME || 'TechOPS',
  companyName: import.meta.env.VITE_COMPANY_NAME || 'GCTechops',
  location: import.meta.env.VITE_BUSINESS_LOCATION || 'Guatemala',
  domain: import.meta.env.VITE_BUSINESS_DOMAIN || 'gctechops.com',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://gctechops.com',
  sentinelAppUrl: import.meta.env.VITE_SENTINEL_APP_URL || 'https://sentinel.gctechops.com',
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || '',
  calUrl: import.meta.env.VITE_CAL_URL || '',
  plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || '',
  leadMagnetUrl: import.meta.env.VITE_LEAD_MAGNET_URL || '/downloads/checklist-resiliencia-techops.pdf',
  founder: {
    name: import.meta.env.VITE_FOUNDER_NAME || 'Davis Galvez',
    role: import.meta.env.VITE_FOUNDER_ROLE || 'Ingeniero de observabilidad e infraestructura',
    photo: import.meta.env.VITE_FOUNDER_PHOTO || '',
    linkedin: import.meta.env.VITE_FOUNDER_LINKEDIN || '',
  },
};

config.phoneFull = `+${config.countryCode}${config.phone}`;
config.whatsappUrl = `https://wa.me/${config.countryCode}${config.phone}`;
config.hasFounderProfile = Boolean(config.founder.name && config.founder.role);

export default config;
