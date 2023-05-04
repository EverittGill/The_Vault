// Import necessary modules
const express = require('express');
const router = express.Router();
const { User, Accounts } = require('../models');

router.get("/", (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect("homepage");
      return;
    }
    res.render("login");
  });

// Route to render the home page
router.get('/homepage', async (req, res) => {
  try {
    const userData = await Accounts.findAll({
      include: [{ model: User }],
    });
    const accounts = userData.map(user => user.get({ plain:true }));
    res.render('homepage', { 
      accounts 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/animation', (req,res) => {
  res.render('animation')
});

module.exports = router;

