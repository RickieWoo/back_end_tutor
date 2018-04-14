var express = require("express");
var router = express.Router();
var enrty_logic = require("../logic/entry_logic");
/* GET users listing. */
'http://localhost:3000/entry_form/userlist'
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/userlist", (req, res, next) => {
  let params = {
    phone: "123456",
    HDAS: "kDLSAKD"
  };
  // console.log(
  //   `[entryForm] userlist params => ${JSON.stringify(params, null, 4)}`
  // );
  res.json(params);
});


router.post("/new", (req, res, next) => {
  let params = {
    phone: "123456"
  };
  enrty_logic.createUser(params)
  .then(result => {
    console.log(
      `[entryForm] userlist params => ${JSON.stringify(params, null, 4)}`
    );
    res.json(result);
  })
  .catch(err => {
    res.json(err);
  })
 
  
});

module.exports = router;
