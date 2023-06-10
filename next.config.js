module.exports = {
  cssLoaderOptions: {
    url: false,
  },
  reactStrictMode: true,
  env: {
    MAILCHIMP_SUBSCRIBE_URL: process.env.MAILCHIMP_SUBSCRIBE_URL,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
    NEXT_PUBLIC_SITE_VERSION: process.env.NEXT_PUBLIC_SITE_VERSION,
    FORMS_ENABLED: process.env.FORMS_ENABLED,
  },
};
