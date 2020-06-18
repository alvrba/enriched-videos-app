const {models} = require('../models');

exports.autoload = (req, res, next, userId) => {

	const options = {
		include: [
			{model: models.video, as: 'content'}
		]
	};

	models.user.findByPk(userId, options)
	.then(user => {
		if (user) {
			req.user = user;
			next();
		} else {
			throw new Error ('There is no user with id='+userId);
		}
	})
	.catch(error => next(error));

};


exports.index = (req, res, next) => {
	models.user.findAll()
	.then(users => {
		if (users){
			res.render('user', { users });
		} else {
			throw new Error ('There are not users');
		}
	})
	.catch(error => next(error));
};


exports.show = (req, res, next) => {
	const user = req.user;
	res.render('user/show', { user });
};


exports.new = (req, res, next) => {
	res.render('user/new');
};


exports.create = (req, res, next) => {
	console.log(req.body)
	const {username, email, name, lastname, password} = req.body;

	const user = models.user.build({
		username,
		email,
		name,
		lastname,
		password
	});

	user.save({fields: ['username', 'email', 'name', 'lastname', 'password', 'salt']})
	.then(user => {
		console.log("AAAA")
		res.redirect('/users/' + user.id)
	})
	.catch(error => {
		console.log("EEEE")
		next(error);
	})

};


exports.edit = (req, res, next) => {
	const user = req.user;
	res.render('user/edit', { user });
};


exports.update = (req, res, next) => {
	const {username, email, name, lastname, password} = req.body;

	const user = req.user;
	user.email = email;
	user.name = name;
	user.lastname = lastname;
	user.password = password;

	user.save({fields: ['email', 'name', 'lastname', 'password', 'salt']})
	.then(user => {
		res.redirect('/users/' + user.id)
	})
	.catch(error => {
		next(error);
	})
};


exports.destroy = (req, res, next) => {
	req.user.destroy()
	.then(() => {

		if (req.session.user && req.session.user.id === req.user.id) {
			delete req.session.user;
		}

		res.redirect('/');
	})
	.catch(error => {
		next(error);
	})
};
