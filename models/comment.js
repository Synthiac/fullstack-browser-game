const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        level_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: "level",
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            // allowNull: false
            references: {
                model: "user",
                key: "id"
            }
        },
        commenter: {
            type: DataTypes.STRING,
            // potentially keep this? Depends if I can do nested "include" from sequelize
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;