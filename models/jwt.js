'use strict'
const jwt=require('jwt-simple');
const moment=require('moment');
const env=require('./env');
module.exports= {
    createToken:function (email)
        {
            const payload = {
                sub: email,
                iat: moment().unix(),
                exp: moment().add(1, 'days').unix()
            }

            return jwt.encode(payload, env.SECRET_TOKEN);
        },
    getToken:function (token) {
        return jwt.decode(token,env.SECRET_TOKEN);
    }
}