const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  //uri: 'mongodb://localhost:27017/mean-angular-2', // Databse URI and database name
  uri:'mongodb://saloni:saloni0101@ds053958.mlab.com:53958/mean-app-angular2',
  secret: crypto, // Cryto-created secret
  //db: 'mean-angular-2' // Database name
  db:'mean-app-angular2'
}