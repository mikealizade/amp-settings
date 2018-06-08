require('dotenv').config();
const env = process.env.NODE_ENV;

const config = {
  dev: {
    env,
    port: process.env.PORT || 3001,
    db: 'mongodb://mike:mongo@ds237620.mlab.com:37620/ampsettings',
    dbLocal: 'mongodb://localhost:27017/ampsetting'
  },
  production: {
    env,
    port: process.env.PORT || 5000,
    db: 'mongodb://mike:mongo@ds237620.mlab.com:37620/ampsettings'
  }
};

module.exports = config[env];
