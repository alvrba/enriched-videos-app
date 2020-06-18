'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('videos',
    {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            title: {
                type: Sequelize.STRING,
                validate: {notEmpty: {msg: "The title is needed"}}
            },
            description: {
                type: Sequelize.STRING,
            },
            url: {
                type: Sequelize.STRING
            },
            data: {
                type: Sequelize.JSON
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
    },
    {
      sync: { force: true }
    }
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('videos');
  }
};
