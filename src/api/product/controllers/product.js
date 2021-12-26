'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    async find(ctx) {
        // Calling the default core action
        const { meta } = await super.find(ctx);

        // some custom logic here
        const data = await strapi.entityService.findMany('api::product.product', {
            populate: {
                category: {
                    fields: ['name', 'description']
                },
                color: {
                    fields: ['name', 'hex']
                },
                sex: {
                    fields: ['type']
                },
                size: {
                    fields: ['name']
                },
            },
        });

        return { data, meta };
    },
}));
