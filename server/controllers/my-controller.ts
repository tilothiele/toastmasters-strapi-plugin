import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('toastmasters-strapi-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
