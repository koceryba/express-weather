module.exports.register = async function(req, res) {

  var user = {
    "name": req.body.name,
    "email": req.body.email,
    "password": req.body.password
  }

  const restul = await registerModel.register(user)



}