'use strict';
module.exports = (sequelize, DataTypes) => {
	const song = sequelize.define('song', {
		name: DataTypes.STRING,
		artist: DataTypes.STRING,
		danceability: DataTypes.DOUBLE,
		energy: DataTypes.DOUBLE,
		key: DataTypes.DOUBLE,
		loudness: DataTypes.DOUBLE,
		mode: DataTypes.BOOLEAN,
		speechiness: DataTypes.DOUBLE,
		acousticness: DataTypes.DOUBLE,
		instrumentalness: DataTypes.DOUBLE,
		liveness: DataTypes.DOUBLE,
		valence: DataTypes.DOUBLE,
		tempo: DataTypes.DOUBLE,
		duration_ms: DataTypes.BIGINT,
		time_signature: DataTypes.INTEGER,
		rank: DataTypes.INTEGER
	}, {});
	song.associate = function (models) {
		
	};
	return song;
};