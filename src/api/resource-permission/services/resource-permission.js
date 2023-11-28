'use strict';

/**
 * resource-permission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resource-permission.resource-permission');
