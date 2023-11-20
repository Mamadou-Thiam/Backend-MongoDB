const router = require("express").Router();

const user = require("../controllers/controller");


router.get("/:id", user.viewUser);
router.post("/new-user", user.createUser);

router.put("/:id", user.updateUser);
router.delete("/:id", user.removeUser); 

module.exports = router;
