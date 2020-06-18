const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const {models} = require('../models');
const paginate = require('../helpers/paginate').paginate;


exports.index = (req, res, next) => {
	const nVideosPerPage = 4;
	const findOptions = {
		include: [
			{model: models.user, as: 'creator'}
		],
		limit: nVideosPerPage,
		order: [['id', 'DESC']]
	};




	findOptions.include.push({
		model: models.user, as: 'creator'
	});


	models.video.findAll(findOptions)
	.then(videos => {
		if (videos){
			res.render('index.ejs', { videos });
		} else {
			throw new Error ('There are not videos');
		}
	})
	.catch(error => next(error));

};
