'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      list: [
        {
          id: 1,
          name: '期望',
        },
        {
          id: 2,
          name: '期望',
        },
        {
          id: 3,
          name: '期望',
        }, {
          id: 4,
          name: '期望',
        },
      ],
    };
  }
}

module.exports = HomeController;
