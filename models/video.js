"use strict";
// Definition of the Video model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('video',
        {
            title: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "The title is needed"}}
            },
            description: {
                type: DataTypes.STRING,
            },
            url: {
                type: DataTypes.STRING
            },
            data: {
                type: DataTypes.JSON
            }
        });
};
