const express = require("express");
const router = express.Router();

router.use("/info", (req, res)=>{
  res.json({msg: "ok"})
});

module.exports = router;