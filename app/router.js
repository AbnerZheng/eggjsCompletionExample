'use strict';

/**
 * @param {Egg.Application} app
 */
module.exports = app => {
  app.controller.home.index
  app.get('/', app.controller.home.index);
};
