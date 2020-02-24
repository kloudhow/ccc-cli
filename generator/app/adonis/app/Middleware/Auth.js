'use strict';

const jwt = use('jsonwebtoken');
const _ = use('lodash');
const Config = use('Config');
const Exception = use('App/Exceptions/CustomException');

class Auth {
  constructor (props) {
    this.key = Config.get('auth.jwt.options.secret');
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle (ctx, next) {
    let token = Auth.extractToken(ctx.request);
    if (!token) {
      throw new Exception('Token not found!', 401, 'E_TOKEN_NOT_FOUND');
    }

    try {
      let payload = jwt.verify(token, this.key);
      _.set(ctx, 'auth.payload', payload);

      // call next to advance the request
      await next();
    } catch (e) {
      console.log(e);
      throw new Exception('Token invalid!', 401, 'E_TOKEN_INVALID');
    }
  }

  static extractToken (request) {
    if (typeof request.header('authorization') === 'string') {
      let [scheme, credentials] = request.header('authorization').trim().split(' ');

      if (scheme.toLowerCase() === 'bearer') {
        return credentials;
      }
    }

    return false;
  }
}

module.exports = Auth;
