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
        const accountsData = await Accounts.findByPk(req.params.id);
        res.status(200).json(accountsData);
    } catch (err) {
        res.status(500).json(err);
    }
} );


router.post('/', async (req, res) => {
    try {
        
        const accountsData = await Accounts.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(accountsData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {  
    // if the user is the author of the article, then they can update it
    try {   
        const accountsData = await Accounts.update(req.body, {
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
        const accountsData = await Accounts.destroy({
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