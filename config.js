var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';

var config = {
  
  production: {
    root: rootPath,
    app: {
      name: 'jschris'
    },
    port: process.env.port,
  }
};

module.exports = config[env];
