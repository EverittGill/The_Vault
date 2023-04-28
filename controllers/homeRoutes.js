// Import necessary modules
const express = require('express');
const router = express.Router();
const { User, Accounts } = require('../models');


// Route to render the home page
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get("/login", (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect("homepage");
      return;
    }
    res.render("login");
  });

// Route to handle user account creation
router.post('/signup', async (req, res) => {
  // Code to handle user account creation
});



module.exports = router;

