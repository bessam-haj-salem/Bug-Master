const expressJwt = require('express-jwt');
const { secret } = require('../config/config.json');

module.exports = authorize;


function authorize(roles = []) {
    // roles param can be a single role string (e.g. Role.User or 'User') 
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        // authenticate JWT token and attach user to request object (req.user)
        expressJwt({ secret }),

        // authorize based on user role
        (req, res, next) => {
         
           // return res.status(200).json({"expressJwt":token });
            //return res.status(200).json({ expressJwt });
            if (roles.length && !roles.includes(req.user.role)) {
                // user's role is not authorized
                return res.status(200).json({ message: 'NoAccessRight' });
            }

            // authentication and authorization successful
            next();
        }
    ];
}
