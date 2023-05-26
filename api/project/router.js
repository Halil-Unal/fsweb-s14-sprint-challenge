//  `/api/projects` router buraya
const router = require("express").Router();
const mw = require("./model");


router.get("/",async (req,res,next)=>{
    try {
        const all= await mw.icindekileriGetir(req.params.id);
        res.json(all);
    } catch (error) {
        next(error);
    }
});

module.exports = router;