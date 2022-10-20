const jwt =require('jsonwebtoken');
const token= jwt.sign(
    {
        exp:Math.floor(Date.now()/1000)+60*60,
        iat:Math.floor(Date.now()/1000),
        name:"Ali",
        role:"Admin"
    },
    'koeb'
);
console.log('token', token);
function validate(req, res,next){
    var value=jwt.verify(req.headers.token,'koeb');
    let expTime= new Date(value.exp);
    if(expTime< Date.now()){
      res.status().send({message:'Access denied'})
    }
    next();
}
var decoded=jwt.verify(token,'koeb');
console.log(decoded);