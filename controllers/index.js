var express = require("express");
router =  new express.Router();

router.use("/api/films", require("./films"));

router.get("/", function(req, res){
    req.json({data: "Welcome!"});
});

router.get("/about", function(){
    req.json({data: "All about us"});
});

module.exports = router;
