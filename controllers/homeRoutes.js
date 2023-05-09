// Import necessary modules
const express = require('express');
const router = express.Router();
const { User, Accounts } = require('../models');
const withAuth = require("../utils/auth")

router.get("/", (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect("homepage");
      return;
    }
    res.render("login");
  });

// Route to render the home page
router.get('/homepage', withAuth, async (req, res) => {
  try {
    const userData = await Accounts.findAll({
      where: {user_id: req.session.user_id},
      include: [{ model: User }],
      
      
    });
    const accounts = userData.map(user => user.get({ plain:true }));
    res.render('homepage', { 
      accounts, /* user: accounts[0].user.name */ 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// posts a login request for an existing user.
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log("we made it this far")
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log(req.session.user_id); 
      res.redirect('/animation');
    });
    

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/animation', (req, res) => {
  res.render('animation')
});




module.exports = router;

