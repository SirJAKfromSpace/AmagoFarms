/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Inventory', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		itemType: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		userID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'Inventory',
		freezeTableName: true,
		timestamps: false
	});
};
