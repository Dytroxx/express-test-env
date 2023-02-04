var express = require('express');
var router = express.Router();
const { getUsers, getUserByID, deleteUserById } = require('../services/users.service');

router
  .route('/')
  .get( (req, res, next) => {
    res.send(getUsers());
  });

router
  .route('/:userId')
  .get( (req, res, next) => {
    const { userId } = req.params;
    res.send(getUserByID);
  })
  .delete( (req, res, next) => {
    const { userId } = req.params;
    res.send(deleteUserById);
  });

module.exports = router;
