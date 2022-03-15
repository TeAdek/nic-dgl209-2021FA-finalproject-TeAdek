'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi})=>({
    async create(ctx){
        const {amount,shippingAddress,city,state,pin,token} = ctx.require.body
    }
}));
