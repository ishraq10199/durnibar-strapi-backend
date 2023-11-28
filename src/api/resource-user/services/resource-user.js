'use strict';

/**
 * resource-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resource-user.resource-user');
