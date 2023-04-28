const router = require('express').Router();
const userRoutes = require('./userRoutes');
const accountRoutes = require('./accountRoutes');

router.use('/accounts', accountRoutes);
router.use('/users', userRoutes);


module.exports = router;