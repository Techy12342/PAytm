const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const zod = require("zod");
app.use(cors());
app.use(express.json())
// router.use("/signup",)  

const signupschema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})
router.post("/signup", (req,res) =>{
    const body = req.body;
})
module.exports = router