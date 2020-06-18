const {models} = require('../models');
const url = require('url');

const maxTime = 120*60*1000;

const authenticate = (email, password) => {

    return models.user.findOne({where: {email: email}})
    .then(user => {
        if (user && user.verifyPassword(password)) {
            return user;
        } else {
            return null;
        }
    });
};

exports.loginNeeded = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    const redir =
    res.redirect('/session?redir=' + (req.param('redir') || req.url));
  }
};

exports.onlyAdminOrMyself = (req, res, next) => {
  if (req.user.id == req.session.user.id || !!req.session.user.isAdmin) {
    next();
  } else {
    res.send(403);
  }
};

exports.onlyAdminOrOwner = (req, res, next) => {
  if (req.video.userId == req.session.user.id || !!req.session.user.isAdmin) {
    next();
  } else {
    res.send(403);
  }
};

exports.onlyAdmin = (req, res, next) => {
  if (!!req.session.user.isAdmin) {
    next();
  } else {
    res.send(403);
  }
};


exports.deleteExpiredUserSession = (req, res, next) => {
	if (req.session.user) {
		if (req.session.user.expires < Date.now()) {
			delete req.session.user;
		} else {
			req.session.user.expires = Date.now() + maxTime;
		}
	}
	next();
};


exports.new = (req, res, next) => {

	let redir = req.query.redir || url.parse(req.headers.referer || '/').path;
  if (redir === '/session') {
        redir = "/";
    }

	res.render('session/new', { redir });
};


exports.create = (req, res, next) => {
	const {email, password} = req.body;
	const redir = req.body.redir || '/';


	authenticate(email, password)
	.then(user => {
		if (user != null) {
			const userSession = {
				username: user.username,
				id: user.id,
        isAdmin: user.isAdmin,
				expires: Date.now() + maxTime
			}
			req.session.user = userSession;

			res.redirect(redir);
		} else {
			throw new Error ('Error inicio sesión');
		}
	})
	.catch(error => {
		next(error);
	})



};


exports.destroy = (req, res, next) => {
	delete req.session.user;
	res.redirect('/');
};
