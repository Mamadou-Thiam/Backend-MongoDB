const User=require("../models/user")


module.exports.createUser =  (async (req,res) => {
    const {prenom,nom,age,profession} = req.body
    const user = await   User.create({
        prenom,
        nom,
        age,
        profession
    })
    return res.status(200).json({message : "user created " , user})
})

module.exports.updateUser=(async(req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ message: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
})

module.exports.removeUser=(async(req,res)=>{
    User.findOneAndDelete (req.params.id, req.body)
      .then(user => res.json({ message: 'user entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a user' }));
})


module.exports.viewUser=(async(req,res)=>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ message: 'No user found' }));
})


  