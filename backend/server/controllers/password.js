var crypto = require('crypto');
var sha512 = require('js-sha512').sha512;
var SaltLength = 128;

function createHash(password,salt) {
 //var salt = generateSalt(SaltLength);
  //var salt="b911263a1fc55b5dec029db9a41a20145931a4f5c9f4577d33c44eeefee377b274410bffb4485402bebd2a895242980450370d939bd4717f4c48fb743d1af818";
 // $random_salt = hash('sha512', uniqid(openssl_random_pseudo_bytes(16), TRUE));
 console.log("salt:"+salt)
  // Create salted password 
  //$password = hash('sha512', $password . $random_salt);
  var mx=password + salt;
  var hash = sha512(mx);
 // var hash = md5(password + salt);
  return  hash;
}

function validateHash(hash, password) {
  var salt = hash.substr(0, SaltLength);
  var validHash = salt + md5(password + salt);
  return hash === validHash;
}

function generateSalt(len) {
  var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ',
      setLen = set.length,
      salt = '';
  for (var i = 0; i < len; i++) {
    var p = Math.floor(Math.random() * setLen);
    salt += set[p];
  }
  return salt;
}

function md5(string) {
  return crypto.createHash('md5').update(string).digest('hex');
}

module.exports = {
  'generateSalt':generateSalt,
  'hash': createHash,
  'validate': validateHash
};