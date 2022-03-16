'use strict';

/**
 *  order controller
 */
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi})=>({
    async create(ctx){
        const {amount,shippingAddress,city,state,pin,token} = ctx.require.body
        await stripe.charges.create({
            amount: amount * 100,
            currency:"CAD",
            source:token,
            description:`order by user ${ctx.state.user.email}`
          })

        const order = await strapi.db.query('api::order.order').create({
            data:{
                shippingAddress,
                city,
                state,
                amount,
                items,
                pin,
                user:ctx.state.user.email
            }
        })
        return order
    }
}));
