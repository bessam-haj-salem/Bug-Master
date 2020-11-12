const jwt = require('jsonwebtoken');
const config = require('../config/config.json');


const auth = async (req, res, next) => {
    let token = req.headers['x-access-token'];
     if (!token){
       return res.status(403).send({ 
         auth: false, message: 'No token provided.' 
       });
     }
     try {
           const user = await jwt.verify(token, config.secret);
           req.user = user;
          
          console.log(req.user)
           next();
       } catch(err) {
             return res.status(403).send({ 
             auth: false, 
             message: 'Fail to Authentication. Error -> ' + err 
           });
       };
     };
module.exports = auth;
