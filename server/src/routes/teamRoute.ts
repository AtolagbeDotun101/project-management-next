const express = require("express");
const {getTeams} = require('../controller/teamController');

const router = express.Router();

router.get('/', getTeams);

module.exports= router;