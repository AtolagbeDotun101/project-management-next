import express = require("express");
const {search} = require("../controller/searchController");


const router = express.Router();

router.get('/', search);

module.exports= router;