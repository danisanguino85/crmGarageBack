const router = require("express").Router();

const { sendMail } = require("../../../mailing/mailing");

router.post("/", sendMail);

module.exports = router;
