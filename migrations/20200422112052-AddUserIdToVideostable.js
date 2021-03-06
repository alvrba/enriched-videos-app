'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'videos',
        'userId',
        {type: Sequelize.INTEGER}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('videos', 'userId');
  }
};
