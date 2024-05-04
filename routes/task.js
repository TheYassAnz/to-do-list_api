// impot express
const express = require('express');

// import router module
const router = express.Router();

const taskCtrl = require('../controllers/task');

const auth = require('../middleware/auth');

router.get('/', auth, taskCtrl.getAllTask)
router.get('/:id', auth, taskCtrl.getOneTask)
router.post('', auth, taskCtrl.createTask)
router.put('/:id', auth, taskCtrl.updateTask)
router.delete('/:id', auth, taskCtrl.deleteTask);

module.exports = router;