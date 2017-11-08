'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	*index() {
		const ctx = this.ctx;
		const page = ctx.query.page || 1;
		const newsList = yield ctx.service.news.list(page);
		yield ctx.service.news.list(2);
		this.ctx.body = JSON.stringify(newsList);
	}
	/**
	 * test as
	 * @param {Number} a
	 * @param {Number} b
	 */
	test(a,b){
		return a+b;
	}
}

module.exports = HomeController;