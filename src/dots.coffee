Sequelize = require "sequelize"

DB = new Sequelize 'database', 'username', 'password', 
  dialect: 'sqlite'
  storage: __dirname + '../db/dots.sqlite'
  
