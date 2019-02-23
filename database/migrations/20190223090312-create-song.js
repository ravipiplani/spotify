'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('songs', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			artist: {
				type: Sequelize.STRING
			},
			danceability: {
				type: Sequelize.DOUBLE
			},
			energy: {
				type: Sequelize.DOUBLE
			},
			key: {
				type: Sequelize.DOUBLE
			},
			loudness: {
				type: Sequelize.DOUBLE
			},
			mode: {
				type: Sequelize.BOOLEAN
			},
			speechiness: {
				type: Sequelize.DOUBLE
			},
			acousticness: {
				type: Sequelize.DOUBLE
			},
			instrumentalness: {
				type: Sequelize.DOUBLE
			},
			liveness: {
				type: Sequelize.DOUBLE
			},
			valence: {
				type: Sequelize.DOUBLE
			},
			tempo: {
				type: Sequelize.DOUBLE
			},
			duration_ms: {
				type: Sequelize.BIGINT
			},
			time_signature: {
				type: Sequelize.INTEGER
			},
			rank: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('songs');
	}
};