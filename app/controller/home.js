'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	*index() {
		const ctx = this.ctx;
		yield ctx.service.news.list(1);
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

export default HomeController;