const withCSS = require('@zeit/next-css');

module.exports =withCSS({
    publicRuntimeConfig: {
        APP_NAME:'CrickUniverse',
        API_DEVELOPMENT:'http://localhost:8000/api',
        API_PRODUCTION: 'https://crickuniverse.com/api',
        PRODUCTION : true,
        DOMAIN_DEVELOPMENT: 'http://localhost:3000',
        DOMAIN_PRODUCTION: 'https://crickuniverse.com',
        FB_APP_ID: '662260121366662'

    }
});
