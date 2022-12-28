"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // user_id: {
      //   type: Sequelize.INTEGER.UNSIGNED,
      //   allowNull: false,
      //   references: {
      //     model: {
      //       tableName: 'users',
      //       schema: 'schema'
      //     },
      //     key: 'id',
      //     onUpdate: "CASCADE",
      //     onDelete: "CASCADE",
      //   },
      // },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // await queryInterface.addConstraint("Users", {
    //   type: "FOREIGN KEY",
    //   fields: ["user_id"], // field name of the foreign key
    //   name: "fk_users_id",
    //   references: {
    //     model: "user",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    // })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Events");
  },
};
