var Userdb = require('../model/model');

//create and save new user 
exports.create = (req,res) =>{
    //validate request 
    if(!req.body){
        res.status(400).send({message:"Content can not be emtpy"});
        return;
    }

    //new user 
    const user = new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
 })

 //save user in DB
 user 
  .save(user)
  .then(data=>{
      res.send(data)
  })
  .catch(err=>{
      res.status(500).send({
          message:err.message ||"Some error occured while creating "
      });
  });

}



// Sereach for all users and single user 
exports.find = (req,res) =>{
    
}

// update  a single user  with  Id
exports.update = (req,res) =>{
    
}
// Delete a  user  with ID 
exports.delete = (req,res) =>{
    
}