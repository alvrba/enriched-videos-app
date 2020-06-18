var express = require('express');
var router = express.Router();

const videoController = require('../controllers/video');
const userController = require('../controllers/user');
const sessionController = require('../controllers/session');
const generalController = require('../controllers/general');

// Automatic logout sessions (User sessions)
router.all('*', sessionController.deleteExpiredUserSession);


// Autoloads
router.param('videoId', videoController.autoload);
router.param('userId', userController.autoload);


/* GET home page. */
router.get('/', generalController.index);


// Routes for the resource /video
router.get('/videos', videoController.index);
router.get('/videos/:videoId(\\d+)', videoController.show);
router.get('/videos/new', sessionController.loginNeeded, videoController.new);
router.post('/videos', sessionController.loginNeeded, videoController.create);
router.get('/videos/:videoId(\\d+)/edit', sessionController.loginNeeded, sessionController.onlyAdminOrOwner, videoController.edit);
router.put('/videos/:videoId(\\d+)', sessionController.loginNeeded, sessionController.onlyAdminOrOwner, videoController.update);
router.delete('/videos/:videoId(\\d+)', sessionController.loginNeeded, sessionController.onlyAdminOrOwner, videoController.destroy);


// Routes for the resource /user
router.get('/users', sessionController.loginNeeded, sessionController.onlyAdmin, userController.index);
router.get('/users/:userId(\\d+)', userController.show);
router.get('/users/new', userController.new);
router.post('/users', userController.create);
router.get('/users/:userId(\\d+)/edit', sessionController.loginNeeded, sessionController.onlyAdminOrMyself, userController.edit);
router.put('/users/:userId(\\d+)', sessionController.loginNeeded, sessionController.onlyAdminOrMyself, userController.update);
router.delete('/users/:userId(\\d+)', sessionController.loginNeeded, sessionController.onlyAdminOrMyself, userController.destroy);

// Routes for the resource /session (User session)
router.get('/session', sessionController.new);
router.post('/session', sessionController.create);
router.delete('/session', sessionController.destroy);


module.exports = router;
