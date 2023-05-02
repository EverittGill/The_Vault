const router = require('express').Router();
const {Accounts} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const accountsData = await Accounts.findAll();
        res.status(200).json(accountsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const accountsData = await accounts.findByPk(req.params.id);
        res.status(200).json(accountsData);
    } catch (err) {
        res.status(500).json(err);
    }
} );


router.post('/', async (req, res) => {
    try {
        const accountsData = await accounts.create(req.body);
        res.status(200).json(accountsData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {  
    // if the user is the author of the article, then they can update it
    try {   
        const accountsData = await accounts.update(req.body, {
            where: {    
                id: req.params.id,
            },
        }); 
        if (!accountsData) {
            res.status(404).json({ message: 'No accounts with this id!' });
            return;
        }       
        res.status(200).json(accountsData);
    } catch (err) {
        res.status(500).json(err);
    } 
});










router.delete('/:id', async (req, res) => {
    try {
        const accountsData = await accounts.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!accountsData) {
            res.status(404).json({ message: 'No accounts with this id!' });
            return;
        }
        res.status(200).json(accountsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;