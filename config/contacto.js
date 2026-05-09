const config = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'steed.galvez@gmail.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '54649404',
  phoneDisplay: import.meta.env.VITE_CONTACT_PHONE_DISPLAY || '5464-9404',
  countryCode: import.meta.env.VITE_CONTACT_COUNTRY_CODE || '502',
  businessName: import.meta.env.VITE_BUSINESS_NAME || 'GC Torque',
  location: import.meta.env.VITE_BUSINESS_LOCATION || 'Guatemala',
  domain: import.meta.env.VITE_BUSINESS_DOMAIN || 'gctorque.com',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.gctorque.com',
};

config.phoneFull = `+${config.countryCode}${config.phone}`;
config.whatsappUrl = `https://wa.me/${config.countryCode}${config.phone}`;

export default config;
