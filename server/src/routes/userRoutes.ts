const express = require("express");
const {getUser, getUsers, postUser} = require("../controller/userController")


const router = express.Router();

router.get("/", getUsers);
router.post("/", postUser);
router.get("/:cognitoId", getUser);

module.exports =router;