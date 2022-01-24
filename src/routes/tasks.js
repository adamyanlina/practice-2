const router = require('express').Router();
const { get, getById, create, update, updateOnlyOneField, deleteById } = require('../controllers/taskController');

router.get('/', get);
router.post('/', create);
router.put('/:id', update);
// http://localhost:3001/tasks/12
router.patch('/:id', updateOnlyOneField);
router.get('/:id', getById);
router.delete('/:id', deleteById);

module.exports = router;