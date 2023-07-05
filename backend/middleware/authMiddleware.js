const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const accountModel=require('../models/account');

const protect=async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Event ")){

        try{
            token=req.headers.authorization.split(" ")[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user =await accountModel.findById(decoded.id).select("-password");
            next();
        }catch(e){
            res.status(401).json({
                message: e.message
            });
            throw new Error("Not authorized");
        }
    }

    if (!token) {
        res.status(400);
        res.json({ message: "Not authorized, no token" });
        throw new Error("Not authorized, no token");
      }
}

module.exports = {
    protect,
  };