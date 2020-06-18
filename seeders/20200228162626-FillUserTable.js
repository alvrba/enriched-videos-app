'use strict';

var crypt = require('../helpers/crypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
            {
                username: 'admin',
                email: 'admin@gmail.com',
                name: 'Admin',
                lastname: 'admin',
                password: crypt.encryptPassword('1234', 'aaaa'),
                salt: 'aaaa',
                isAdmin: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'pepe',
                email: 'pepe@gmail.com',
                name: 'Pepe',
                lastname: 'pepe',
                password: crypt.encryptPassword('5678', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'jose',
                email: 'jose@gmail.com',
                name: 'Jose',
                lastname: 'B',
                password: crypt.encryptPassword('4321', 'bbbb'),
                salt: 'bbbb',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
