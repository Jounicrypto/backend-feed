const express = require('express');
const controller = require('./controllers/controller');

const router = express.Router();

router.get('/', controller.getHomePage);
router.get('/feed', controller.getNewArticle);
router.post('/message', controller.postMedia);
router.post('/message/del/:id', controller.delComment);
router.get('./message/edit/:id', controller.getEditMessage)

module.exports = router;