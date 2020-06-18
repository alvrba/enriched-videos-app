const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const {models} = require('../models');
const paginate = require('../helpers/paginate').paginate;

exports.autoload = (req, res, next, videoId) => {

	const options = {
		include: [
			{model: models.user, as: 'creator'}
		]
	};

	models.video.findByPk(videoId, options)
	.then(video => {
		if (video) {
			req.video = video;
			console.log(video)
			next();
		} else {
			throw new Error ('There is no video with id='+videoId);
		}
	})
	.catch(error => next(error));

};


exports.index = (req, res, next) => {

	let countOptions = {
		include: []
	};

	const search = req.query.search || '';
	if (search) {
		const search_like = "%" + search.replace(/ +/g,"%") + "%";
		countOptions.where = {title: { [Op.like]: search_like }};
	}

	models.video.count(countOptions)
	.then(nVideos => {
		const nVideosPerPage = 2;
		const pageno = parseInt(req.query.pageno) || 1;

		res.locals.paginate_control = paginate(nVideos, nVideosPerPage, pageno, req.url);

		const findOptions = {
			...countOptions,
			offset: nVideosPerPage * (pageno - 1),
			limit: nVideosPerPage,
			order: [['id', 'DESC']]
		}

		findOptions.include.push({
			model: models.user, as: 'creator'
		});

		return models.video.findAll(findOptions);
	})
	.then(videos => {
		if (videos){
			res.render('video', { videos, search });
		} else {
			throw new Error ('There are not videos');
		}
	})
	.catch(error => next(error));

};


exports.show = (req, res, next) => {

	const video = req.video;
	const data = JSON.stringify(video.data);
	res.render('video/show', { video, data, layout: 'read-video-layout' });

};


exports.new = (req, res, next) => {

	res.render('video/new', { layout: 'create-video-layout' });

};


exports.create = (req, res, next) => {
	const {title, description, url} = req.body;

	const data = req.body;

	const userId = req.session.user && req.session.user.id || 0;

	const video = models.video.build({
		title,
		url,
		description,
		data,
		userId
	});

	video.save({fields: ['title', 'url', 'description', 'data', 'userId']})
	.then(video => {
		res.redirect('/videos/' + video.id);
	})
	.catch(error => {
		next(error);
	})
};


exports.edit = (req, res, next) => {
	const video = req.video;
	const data = JSON.stringify(video.data);
	res.render('video/edit', { video, data, layout: 'create-video-layout' });
};


exports.update = (req, res, next) => {
	const {title, description, url} = req.body;

	const data = req.body;

	const video = req.video;
	video.title = title;
	video.url = url;
	video.description = description;
	video.data = data;

	video.save({fields: ['title', 'url', 'description', 'data']})
	.then(video => {
		//res.redirect('/videos/' + video.id + '/');
		res.send('/videos/' + video.id + '/');
	})
	.catch(error => {
		next(error);
	})
};


exports.destroy = (req, res, next) => {
	req.video.destroy()
	.then(() => {
    res.redirect('/');
  })
	.catch(error => {
		next(error);
	})
};
