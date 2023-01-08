module.exports = {
  cssLoaderOptions: {
    url: false,
  },
  reactStrictMode: true,
  env: {
    MAILCHIMP_SUBSCRIBE_URL: process.env.MAILCHIMP_SUBSCRIBE_URL,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    NEXT_PUBLIC_SITE_VERSION: undefined,
  },
};
